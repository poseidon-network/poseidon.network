import React from 'react';
import axios from 'axios';

interface IProps {}

interface IState {
  file?: {
    name: string;
    uri: string;
    mimetype: string;
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
  myVideo: React.RefObject<HTMLVideoElement> = React.createRef();

  async componentDidMount() {
    const fileID = new URLSearchParams(window.location.search).get('q');
    if (fileID) {
      const { data: { data } } = await axios.post(`${process.env.GRAPHQL_URI}`, {
        operationName:null,
        variables:{},
        query: `{ file(id: "${fileID}") {    name    uri   mimetype}}`,
      });

      if (data.file) {
        this.setState({
          file: data.file,
        });
      }
    }
    this.setState({
      isLoading: false,
    });
  }

  handleUpdateTime = () => {
    const video = this.myVideo.current;
    if (video) {
      if (video.currentTime >= (video.duration) / 10) {
        video.pause();
        this.setState({
          isExceedPreviewQuta: true,
        });
      }
    }
  }

  render() {
    const { file, isLoading } = this.state;
    return (
      <div className="container">
        {
          file ? (
            file.mimetype === 'video/mp4' ? (
              <video
                ref={this.myVideo}
                controls={!this.state.isExceedPreviewQuta}
                controlsList="nodownload"
                onTimeUpdate={this.handleUpdateTime}
              >
                <source src={file.uri} type="video/mp4" />
              </video>
            )
            : ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'].includes(file.mimetype)
              ? <img src={file.uri} />
              : <iframe src={file.uri} />
          ) : <p>{ isLoading ? '' : 'FILE NOT FOUND！' }</p>
        }
        {
          this.state.isExceedPreviewQuta &&
          <div className="modal">
            <div className="modal-text">
              <p>To continue watch this video, please pay and watch in the APP!</p>
              <a className="app-link" href="https://www.pgyer.com/SszB">Download the APP</a>
            </div>
          </div>
        }
      <style jsx>{`
        .container {
          background-color: #222633;
          padding: 50px 0;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
        }

        video, img, iframe {
          width: 90%;
          max-width: 920px;
        }

        p {
          color: #fff;
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

        .modal-text {
          color: #fff;
          font-size: 20px;
          background: #070707c2;
          padding: 16px 24px;
          border-radius: 10px;
          text-align: center;
        }
      `}</style>
      </div>
    );
  }
}
