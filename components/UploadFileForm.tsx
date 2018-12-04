import React from 'react';
import Dropzone from 'react-dropzone';
// @ts-ignore
import ipfsClient from 'ipfs-http-client';
// @ts-ignore
import IpfsApi from 'ipfs-api';
import { FaCloudUploadAlt, FaSpinner } from 'react-icons/fa';
const Buffer = require('buffer/').Buffer;
const protocol = process.env.IPFS_HOST ? 'https' : 'http';
const port = process.env.IPFS_HOST ? 5002 : 5001;
import css from 'styled-jsx/css';

interface IState {
  hash?: string;
  isLoading: boolean;
  hasError: boolean;
}
class UploadFileForm extends React.Component {
  state: IState  = {
    hash: undefined,
    isLoading: false,
    hasError: false,
  };
  ipfsAPI = IpfsApi(process.env.IPFS_HOST || 'localhost', port, { protocol });

  onDrop = async (files: File[]) => {
    const reader = new FileReader();
    this.setState({
      isLoading: true,
      hasError: false,
    });

    reader.onloadend = async () => {
      const buf = Buffer(reader.result);
      this.uploadToIpfs(buf);
    };
    reader.readAsArrayBuffer(files[0]);
  }

  onCancel = () => {
    this.setState({
      file: undefined,
    });
  }

  uploadToIpfs = async (buf: ArrayBuffer) => {
    try {
      const response = await this.ipfsAPI.files.add(buf, { progress: (prog: any) => console.log(`received: ${prog}`) });
      console.log(response);
      this.setState({
        hash: response[0].hash,
        isLoading: false,
      });
    } catch (err) {
      console.error(err);
      this.setState({
        isLoading: false,
        hasError: true,
      });
    }
  }

  render() {
    return (
      <section>
        <div className="dropzone-wrapper">
          <Dropzone
            style={styles.dropzone}
            acceptStyle={styles.dropzoneActive}
            onDrop={this.onDrop}
            onFileDialogCancel={this.onCancel}
          >
            <p>Click or drag file to this area to upload</p>
            { this.state.isLoading
              ? <FaSpinner className={spinResolveCSS.className} />
              : <FaCloudUploadAlt size={50} style={styles.icon} />
            }
          </Dropzone>
        </div>

        <div>
          <a target="_blank" href={`https://ipfs.io/ipfs/${this.state.hash}`}>
            { this.state.hash }
          </a>
        </div>
        { spinResolveCSS.styles  }
        <style jsx>{`
          section {
            width: 100%;
            min-height: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .dropzone-wrapper {
            background-color: #d7f2ee;
            border-radius: 3px;
            padding: 10px;
            display: flex;
            width: 80%;
            max-width: 600px;
            height: 150px;
          }

          p {
            color: #222633;
            opacity: 0.64;
            font-size: 16px;
            line-height: 1.31;
            text-align: center;
          }
        `}</style>

      </section>
    );
  }
}

const spinResolveCSS = css.resolve`
svg {
  -webkit-animation: icon-spin 2s infinite linear;
          animation: icon-spin 2s infinite linear;
}

@-webkit-keyframes icon-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}

@keyframes icon-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}
`;

const styles = {
  dropzone: {
    border: '1px dashed #90cfbe',
    display: 'flex',
    flexDirection: 'column' as 'column',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
    alignItems: 'center',
    padding: '0 10px',
  },
  dropzoneActive: {
    opacity: 0.7,
    borderColor: 'rgb(49, 167, 135)',
  },
  icon: {

  },
};

export default UploadFileForm;
