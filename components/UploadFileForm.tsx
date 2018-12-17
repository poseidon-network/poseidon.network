import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
// @ts-ignore
import IpfsApi from 'ipfs-api';
import { FaCloudUploadAlt, FaSpinner } from 'react-icons/fa';
import css from 'styled-jsx/css';
import { Line } from 'rc-progress';

interface IState {
  hash?: string;
  isLoading: boolean;
  hasError: boolean;
  percentCompleted?: number;
  uri?: string;
}
class UploadFileForm extends React.Component<{}, IState> {
  state: IState  = {
    hash: undefined,
    isLoading: false,
    hasError: false,
  };

  onDrop = async (files: File[]) => {
    if (this.state.isLoading) {
      return;
    }
    const formData = new FormData();
    console.log(files[0]);
    formData.append('operations', '{"operationName":null,"variables":{"file":null},"query":"mutation ($file: Upload!) {  file: uploadPublicFile(file: $file) {    uri    __typename  }}"}');
    formData.append('map', '{ "0": ["variables.file"] }');
    formData.append('0', files[0]);
    this.uploadToIpfs(formData);
  }

  onCancel = () => {
  }

  uploadToIpfs = async (formData: FormData) => {
    this.setState({
      isLoading: true,
      percentCompleted: 0,
      hasError: false,
    });
    try {
      const response = await axios({
        method: 'post',
        url: `${process.env.GRAPHQL_URI}`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
          this.setState({
            percentCompleted: percentCompleted >= 95 ? 95 : percentCompleted,
          });
        },
      });
      this.setState({
        uri: response.data.data.file.uri,
        isLoading: false,
        percentCompleted: 100,
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
      <React.Fragment>
        <div className="dropzone-wrapper">
          <Dropzone
            style={styles.dropzone}
            acceptStyle={styles.dropzoneActive}
            onDrop={this.onDrop}
            onFileDialogCancel={this.onCancel}
          >
            <p>Click or drag file to this area to upload</p>
            { this.state.isLoading
              ? <React.Fragment>
                  <FaSpinner className={spinResolveCSS.className} />
                  <Line percent={this.state.percentCompleted} strokeWidth="1" strokeColor="#90cfbe" />
                </React.Fragment>
              : <FaCloudUploadAlt size={50} style={styles.icon} />
            }
          </Dropzone>
        </div>

        <div className="hash-result">
          <a target="_blank" href={this.state.uri}>
            { this.state.uri }
          </a>
        </div>
        { spinResolveCSS.styles  }
        <style jsx>{`
          .dropzone-wrapper {
            background-color: #d7f2ee;
            border-radius: 3px;
            padding: 10px;
            display: flex;
            width: 90%;
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

          .hash-result {
            margin-top: 10px;
            width: 90%;
            max-width: 500px;
            white-space: nowrap;
            overflow: hidden;
            text-align: center;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

const spinResolveCSS = css.resolve`
svg {
  margin-bottom: 27px;
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
    marginBottom: 15,
  },
};

export default UploadFileForm;
