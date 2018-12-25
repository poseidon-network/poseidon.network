import React from 'react';
import Dropzone from 'react-dropzone';
// @ts-ignore
import IpfsApi from 'ipfs-api';
import { FaSpinner } from 'react-icons/fa';
import css from 'styled-jsx/css';
import { Line } from 'rc-progress';

interface IProps {
  onDrop: (files: File[]) => void;
  isLoading: boolean;
  percentCompleted?: number;
}
const UploadFileForm = ({ onDrop, isLoading, percentCompleted  }: IProps) => (
  <div className="container">
    <div className="dropzone-wrapper">
      <Dropzone
        style={styles.dropzone}
        acceptStyle={styles.dropzoneActive}
        onDrop={onDrop}
      >
        <div className="upload-hint">
          { isLoading
            && <React.Fragment>
                <FaSpinner className={spinResolveCSS.className} />
                <Line percent={percentCompleted} strokeWidth="1" strokeColor="#90cfbe" />
              </React.Fragment>
          }
          <p>Firstly, try to drag and drop your file here!</p>
          <small>Onee you...</small>
        </div>
      </Dropzone>
    </div>

    { spinResolveCSS.styles  }
    <style jsx>{`
      .container {
        z-index: 0;
        height: 256px;
        width: 100%;
        margin-bottom: 87px;
      }
      .dropzone-wrapper {
        border-radius: 3px;
        padding: 10px;
        display: flex;
        margin-left: 32px;
        border: 1px dashed #90cfbe;
      }

      p {
        font-family: Montserrat;
        font-size: 15px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.1px;
        text-align: center;
        color: #ffffff;
        font-size: 21px;
      }

      small {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: -0.1px;
        text-align: center;
        color: #fff;
      }

      .hash-result {
        margin-top: 10px;
        width: 90%;
        max-width: 500px;
        white-space: nowrap;
        overflow: hidden;
        text-align: center;
      }

      .header {
        display: flex;
        padding: 12px 20px 12px 30px;
        width: 100%;
      }

      .col-title {
        font-family: Montserrat;
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.1px;
        color: #fff;
      }

      .upload-hint {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .upload-icon {
        width: 125px;
      }

      .button {
        width: 285px;
        height: 50px;
        border-radius: 4px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        background-color: #90cfbe;
        align-self: flex-end;
        border: 0;
      }

      @media only screen and (max-width: 600px) {
        .dropzone-wrapper {
          margin-left: 0;
        }
      }
    `}</style>
  </div>
);

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
    border: 0,
    display: 'flex',
    flexWrap: 'wrap' as 'wrap',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
    alignItems: 'center',
    padding: '153px 32px 32px',
    justifyContent: 'center',
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
