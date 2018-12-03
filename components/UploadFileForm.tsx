import React from 'react';
import Dropzone from 'react-dropzone';
// @ts-ignore
import ipfsClient from 'ipfs-http-client';
// @ts-ignore
import IpfsApi from 'ipfs-api';
const Buffer = require('buffer/').Buffer;

interface IState {
  file?: File;
  hash?: string;
}
class UploadFileForm extends React.Component {
  state: IState  = {
    file: undefined,
    hash: undefined,
  };
  ipfsAPI = IpfsApi(process.env.IPFS_HOST || 'localhost', 5001);

  onDrop = (files: File[]) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const buf = Buffer(reader.result);
      this.ipfsAPI.files.add(buf, (err: any, result: any) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result);
        this.setState({ hash: result[0].hash });
      });
    };

    reader.readAsArrayBuffer(files[0]);
    this.setState({
      file: files[0],
    });
  }

  onCancel = () => {
    this.setState({
      file: undefined,
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone-wrapper">
          <Dropzone
            style={styles.dropzone}
            activeClassName="dropzone-active"
            onDrop={this.onDrop.bind(this)}
            onFileDialogCancel={this.onCancel.bind(this)}
          >
            <p>Click or drag file to this area to upload</p>
          </Dropzone>
        </div>

        <div>
          <a target="_blank" href={`https://ipfs.io/ipfs/${this.state.hash}`}>
            { this.state.hash }
          </a>
        </div>

        <style jsx>{`
          section {
            width: 100%;
            min-height: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .dropzone-wrapper {
            background-color: #fff;
            border-radius: 4px;
            padding: 15px;
            display: flex;
            width: 80%;
            max-width: 800px;
          }

          p {
            color: #222633;
            opacity: 0.64;
            font-size: 18px;
            line-height: 1.5;
            text-align: center;
          }
        `}</style>

      </section>
    );
  }
}

const styles = {
  dropzone: {
    height: '200px',
    width: '100%',
    maxWidth: '700px',
    cursor: 'pointer',
  },
};

export default UploadFileForm;
