import React from 'react';
import SocialShareList from './SocialShareList';
import fileStyle from './fileStyle';

interface IProps {
  fileID: string;
  hash: string;
  name: string;
  size: number;
  uri: string;
  activeItemHash?: string;
  getFileImage: (name: string) => string;
  handleClickAction: (fileID: string) => void;
}

const FileRow = ({
  hash,
  fileID,
  name,
  size,
  uri,
  activeItemHash,
  getFileImage,
  handleClickAction,
}: IProps) => (
  <React.Fragment>
  <div className="row">
    <div>
      <img className="file-icon" src={getFileImage(name)} />
    </div>
    <div className="file-info">
      <div className="file-name">{ name }</div>
      <div className="file-desc">{ Math.round(size / 10e3) } KB</div>
    </div>
    <div className="hash">{ hash }</div>
    <div onClick={() => handleClickAction(fileID) } className="action">
      { activeItemHash === fileID && <SocialShareList link={uri} /> }
      <div className="bs-circle" />
      <div className="bs-circle" />
      <div className="bs-circle" />
    </div>
  </div>
  <div className="line"/>
  <style jsx>
    { fileStyle }
  </style>
</React.Fragment>
);

export default FileRow;
