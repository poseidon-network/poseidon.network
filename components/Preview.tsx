import React from 'react';
import axios from 'axios';
import { ReactFacebookLoginInfo } from 'react-facebook-login';
import css from 'styled-jsx/css';
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;

interface IProps {}

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

export default class Video extends React.Component<IProps, IState> {
  state: IState = {
    file: undefined,
    isLoading: true,
    isExceedPreviewQuta: false,
  };
  token?: string | null;
  myVideo: React.RefObject<HTMLVideoElement> = React.createRef();

  async componentDidMount() {
    const fileID = new URLSearchParams(window.location.search).get('q');
    this.token = window.localStorage.getItem('authToken');

    if (fileID) {
      await this.fetchVideo(fileID);
      this.setState({
        isLoading: false,
      });
    }
  }

  fetchVideo = async (fileID: string) => {
    const { data: { data } } = await axios.post(`${process.env.GRAPHQL_URI}`, {
      operationName: null,
      variables:{},
      query: `{ file(id: "${fileID}") { name uri mimetype price isPaid viewCount }}`,
    }, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    if (data.file) {
      this.setState({
        file: data.file,
      });
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
        window.location.href = 'https://www.pgyer.com/SszB';
      }
    }, 3000);
  }

  handleLogin = async (userInfo: ReactFacebookLoginInfo) => {
    const { accessToken } = userInfo;
    const { data: { data } } = await axios.post(`${process.env.GRAPHQL_URI}`, {
      operationName:null,
      variables:{},
      query: `mutation {  socialLogin(service: "facebook", accessToken: "${accessToken}") { token } }`,
    });
    if (data.socialLogin) {
      window.localStorage.setItem('authToken', data.socialLogin.token);
      window.location.reload();
    }
  }

  renderFile = () => {
    const { file } = this.state;
    if (!file) {
      return null;
    }
    const {
      mimetype,
      name,
      uri,
      price,
      viewCount,
    } = file;

    if (mimetype === 'video/mp4') {
      return (
        <div>
          <video
            ref={this.myVideo}
            controls={!this.state.isExceedPreviewQuta}
            controlsList="nodownload"
            onTimeUpdate={this.handleUpdateTime}
          >
            <source src={uri} type="video/mp4" />
          </video>
          <p className="name">{ name }</p>
          <div className="file-meta">
            <p className="view">{ viewCount } views</p>
            <p className="price">{price > 0 ? `Price ${price} USD` : 'Free'}</p>
          </div>
          <style jsx>
            { style }
          </style>
        </div>
      );
    }

    if (['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].includes(mimetype)) {
      return (
        <div>
          <img src={uri} />
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
          <div className="modal">
            <div className="modal-content">
              <p className="modal-text">
                To continue to watch this video, please pay first.
              </p>
              <a className="app-link" href={`poseidon://preview${window.location.search}`} onClick={this.handleClickApp}>Open the APP</a>
              { !this.token &&
                <small>Already pay?&nbsp;
                  {/*
                    // @ts-ignore */}
                  <FacebookLogin
                    appId={FACEBOOK_APP_ID}
                    scope="public_profile, email"
                    callback={this.handleLogin}
                    render={(renderProps: any) => (
                      <a href="" onClick={(event: React.SyntheticEvent) => {
                        event.preventDefault();
                        renderProps.onClick();
                      }}>login here</a>
                    )}
                  />
                </small>
              }
            </div>
          </div>
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

  p {
    font-size: 18px;
    margin: 0;
  }

  video, img, iframe {
    width: 100%;
    max-width: 920px;
    max-height: 400px;
  }

  small {
    font-size: 14px;
  }

  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #00000063;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    color: #fff;
    background: #070707c2;
    padding: 16px 24px;
    border-radius: 10px;
    text-align: center;
  }

  .modal-text {
    color: #fff;
    margin: 10px;
    font-size: 18px;
  }

  .app-link {
    font-size: 18px;
    display: block;
  }

  .file-meta {
    padding: 0px;
    height: 40px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    color: #fff;
    font-size: 24px;
    padding-top: 20px;
  }

  .price {
    color: #fff;
    font-size: 18px;
  }

  @media only screen and (min-width: 600px) {
    video {
      min-width: 700px;
    }
  }
`;
