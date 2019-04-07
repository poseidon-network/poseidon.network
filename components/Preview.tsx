import React from 'react';
import css from 'styled-jsx/css';
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

import { saveLoginData } from '../utils/auth';
import { APP_URL } from '../constants';
import CustomApolloClient from '../utils/CustomApolloClient';

import PreviewModal from './PreviewModal';
import Video from './Video';
import { ReactFacebookLoginInfo } from 'react-facebook-login';

const REDIRECT_TIMEOUT_MS = 3000;

interface IProps {
  client: CustomApolloClient<{}>;
  user: IUser;
}
interface IState {
  file?: {
    name: string;
    uri: string;
    mimetype: string;
    isPaid: boolean;
    price: number;
    viewCount: number;
  };
  isLoading: boolean;
  isExceedPreviewQuta: boolean;
}

export class Preview extends React.Component<IProps, IState> {
  state: IState = {
    file: undefined,
    isLoading: true,
    isExceedPreviewQuta: false,
  };
  myVideo: React.RefObject<HTMLVideoElement> = React.createRef();

  async componentDidMount() {
    const fileID = new URLSearchParams(window.location.search).get('q');
    if (fileID) {
      await this.fetchFile(fileID);
      this.setState({
        isLoading: false,
      });
    }
  }

  fetchFile = async (fileID: string) => {
    const { data } = await this.props.client.query<{ file: any }>({
      query: loadFileGQL,
      variables: {
        id: fileID,
      },
    });
    if (data && data.file) {
      this.setState({
        file: data.file,
      });
    }
  }

  handleLogin = async ({ accessToken }: ReactFacebookLoginInfo) => {
    const { data } = await this.props.client.mutate<{ socialLogin: any }>({
      mutation: SOCIAL_LOGIN,
      variables: {
        accessToken,
        service: 'facebook',
      },
    });
    if (data && data.socialLogin) {
      saveLoginData(data.socialLogin);
    }
  }

  handleUpdateTime = () => {
    const video = this.myVideo.current;
    const { file } = this.state;
    if (video && file && file.price > 0 && !file.isPaid) {
      if (video.currentTime >= (video.duration) / 10) {
        video.pause();
        this.setState({
          isExceedPreviewQuta: true,
        });
      }
    }
  }

  handleClickApp = () => {
    const clickedAt = +new Date;
    setTimeout(() => {
      // To avoid failing on return to MobileSafari, ensure freshness!
      if ((+new Date - clickedAt) < 12000) {
        window.location.href = APP_URL;
      }
    }, REDIRECT_TIMEOUT_MS);
  }

  renderFile = () => {
    const { file } = this.state;
    if (!file) {
      return null;
    }

    if (file.mimetype === 'video/mp4') {
      return (
        <Video
          videoRef={this.myVideo}
          video={file}
          isExceedPreviewQuta={this.state.isExceedPreviewQuta}
          onTimeUpdate={this.handleUpdateTime}
        />
      );
    }

    if (['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].includes(file.mimetype)) {
      return (
        <div>
          <img src={file.uri} />
          <style jsx>
            { style }
          </style>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        { this.renderFile() }
        {
          this.state.isExceedPreviewQuta &&
          <PreviewModal
            isLogin={this.props.user.isLogin}
            onClickLogin={this.handleLogin}
            onClickApp={this.handleClickApp}
          />
        }
        <style jsx>
          { style }
        </style>
      </div>
    );
  }
}

const style = css`
  .container {
    background-color: #222633;
    padding: 50px 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
  }


  img, iframe {
    width: 100%;
    max-width: 920px;
    max-height: 400px;
  }
`;

const loadFileGQL = gql`
query ($id: String!) {
  file(id: $id) {
    name
    uri
    mimetype
    price
    isPaid
    viewCount
  }
}
`;

export const SOCIAL_LOGIN = gql`
  mutation socialLogin(
    $service: String
    $accessToken: String
    $idToken: String
    $displayname: String
  ) {
    socialLogin (
      service: $service
      accessToken: $accessToken
      idToken: $idToken
      displayname: $displayname
    ) {
      id
      token
      name
      avatar
    }
  }
`;

export default withApollo<{ user: IUser }>(Preview);
