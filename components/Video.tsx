import React from 'react';
import axios from 'axios';

interface IProps {
  videoID?: string | string[] | undefined;
}

interface IState {
  file?: {
    name: string;
    uri: string;
  };
}

export default class Video extends React.Component<IProps, IState> {
  state: IState = {
    file: undefined,
  };

  async componentDidMount() {
    const { videoID } = this.props;
    if (videoID) {
      const { data: { data } } = await axios.post(`${process.env.GRAPHQL_URI}`, {
        operationName:null,
        variables:{},
        query: `{ file(id: "${videoID}") {    name    uri  }}`,
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
          file &&
          <video controls controlsList="nodownload">
            <source src={file.uri} type="video/mp4" />
          </video>
        }

      <style jsx>{`
        div {
          background-color: #222633;
          padding: 50px 0;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        video {
          width: 90%;
          max-width: 920px;
        }
      `}</style>
      </div>
    );
  }
}
