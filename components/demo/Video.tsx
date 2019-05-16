import React from 'react';
import css from 'styled-jsx/css';

interface IProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  isModalOpened: boolean;
  video: {
    id: string;
    name: string;
    uri: string;
    mimetype: string;
    isPaid: boolean;
    price: number;
    viewCount: number;
  };
  onTimeUpdate: () => void;
  onDownload: (event: React.SyntheticEvent) => void;
}

const Video = ({ video, isModalOpened, videoRef, onTimeUpdate, onDownload }: IProps) => (
  <div>
    <video
      ref={videoRef}
      controls={!isModalOpened}
      controlsList="nodownload"
      onTimeUpdate={onTimeUpdate}
    >
      <source src={video.uri} type="video/mp4" />
    </video>
    <p className="name">{ name }</p>
    <div className="file-meta">
      <p className="view">{ video.viewCount } views</p>
      <div className="right-meta">
        <p className="price">{ video.price > 0 ? `Price ${video.price} USD` : 'Free' }</p>
        { video.price > 0 && (
            video.isPaid
            ? <span>(Paid)</span>
            : <a href="" className="download" onClick={onDownload}>Pay</a>
          )
        }
      </div>
    </div>
    <style jsx>
      { style }
    </style>
  </div>
);

const style = css`
  p {
    font-size: 18px;
    margin: 0;
  }

  video {
    width: 100%;
    max-width: 920px;
    max-height: 400px;
  }

  small {
    font-size: 14px;
  }

  .file-meta {
    padding: 0px;
    height: 40px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .right-meta {
    display: flex;
    flex-directon: row;
    align-items: center;
    font-size: 18px;
  }

  .name {
    color: #fff;
    padding-top: 20px;
  }

  .price {
    color: #fff;
    margin-right: 10px;
  }

  .download {
    cursor: pointer;
    font-size: 18px;
  }

  @media only screen and (min-width: 600px) {
    video {
      min-width: 700px;
    }
  }
`;

export default Video;
