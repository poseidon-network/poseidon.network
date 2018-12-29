import React from 'react';
import axios from 'axios';

interface IProps {}

interface IState {
  file?: {
    name: string;
    uri: string;
    mimetype: string;
  };
}

export default class Video extends React.Component<IProps, IState> {
  state: IState = {
    file: undefined,
  };

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
  }

  render() {
    const { file } = this.state;
    return (
      <div>
        {
          file ? (
            file.mimetype === 'video/mp4' ? (
              <video controls controlsList="nodownload">
                <source src={file.uri} type="video/mp4" />
              </video>
            )
            : ['image/png', 'image/jpg'].includes(file.mimetype)
              ? <img src={file.uri} />
              : <iframe src={file.uri} />
          ) : <p>FILE NOT FOUND！</p>
      }

      <style jsx>{`
        div {
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
      `}</style>
      </div>
    );
  }
}
