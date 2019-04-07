import React from 'react';
import css from 'styled-jsx/css';
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import short from 'short-uuid';

import { saveLoginData } from '../utils/auth';
import { APP_URL, CONTRACT_ADDRESS } from '../constants';
import CustomApolloClient from '../utils/CustomApolloClient';
import PreviewModal from './PreviewModal';
import Video from './Video';
import Modal from './Modal';

const REDIRECT_TIMEOUT_MS = 3000;
const translator = short();

interface IProps {
  client: CustomApolloClient<{}>;
  user: IUser;
}
interface IState {
  sharerAdddress?: string | null;
  file?: {
    id: string;
    name: string;
    uri: string;
    mimetype: string;
    isPaid: boolean;
    price: number;
    viewCount: number;
  };
  isLoading: boolean;
  isModalOpened: boolean;
  showTronLinkMsg: boolean;
}

export class Preview extends React.Component<IProps, IState> {
  state: IState = {
    file: undefined,
    isLoading: true,
    isModalOpened: false,
    showTronLinkMsg: false,
  };
  myVideo: React.RefObject<HTMLVideoElement> = React.createRef();

  async componentDidMount() {
    const fileID = new URLSearchParams(window.location.search).get('q');
    const sharerAdddress = new URLSearchParams(window.location.search).get('s');
    if (fileID) {
      await this.fetchFile(fileID);
      this.setState({
        sharerAdddress,
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
          isModalOpened: true,
        });
      }
    }
  }

  handleClickOpenApp = () => {
    const clickedAt = +new Date;
    setTimeout(() => {
      // To avoid failing on return to MobileSafari, ensure freshness!
      if ((+new Date - clickedAt) < 12000) {
        window.location.href = APP_URL;
      }
    }, REDIRECT_TIMEOUT_MS);
  }

  handlePay = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { file } = this.state;
    if (file && this.props.user.isLogin) {
      const tronWeb = (window as any).tronWeb;
      if (tronWeb) {
        try {
          const contract = await tronWeb.trx.getContract(CONTRACT_ADDRESS);
          const instance = tronWeb.contract(contract.abi.entrys, CONTRACT_ADDRESS);
          const fileHexID = tronWeb.toHex(translator.fromUUID(file.id));
          const f = await instance.files(fileHexID).call();
          const price = f.price.toNumber();
          const trxToUSDPrice = await instance.trxPrice().call();
          const trxPrice = price / (trxToUSDPrice.toNumber() / 100000);
          const sharerAdddress = this.state.sharerAdddress || '410000000000000000000000000000000000000000';
          await instance.pay(fileHexID, sharerAdddress).send({
            callValue: tronWeb.toSun(Math.round(trxPrice)),
          });
          await this.props.client.mutate({
            mutation: payGQL,
            variables: {
              fileID: file.id,
            },
          });
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      } else {
        this.setState({
          showTronLinkMsg: true,
        });
      }
    } else {
      this.setState({ isModalOpened: true });
    }
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
          isModalOpened={this.state.isModalOpened}
          onTimeUpdate={this.handleUpdateTime}
          onDownload={this.handlePay}
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
        { this.state.isModalOpened &&
          <PreviewModal
            isLogin={this.props.user.isLogin}
            onClickLogin={this.handleLogin}
            onClickApp={this.handleClickOpenApp}
          />
        }
        { this.state.showTronLinkMsg &&
          <Modal>
            <p>Could not find the Tron wallet. Please install the
              <a href="https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec">
                TronLink
              </a>
            </p>
          </Modal>
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

  a {
    font-size: 18px;
    margin-left: 5px;
  }
`;

const loadFileGQL = gql`
query ($id: String!) {
  file(id: $id) {
    id
    name
    uri
    mimetype
    price
    isPaid
    viewCount
  }
}
`;

const payGQL = gql`
mutation ($fileID: String) {
  pay(fileID: $fileID) {
    id
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
