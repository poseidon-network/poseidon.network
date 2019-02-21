import React from 'react';
import css from 'styled-jsx/css';

interface IProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  isExceedPreviewQuta: boolean;
  video: {
    name: string;
    uri: string;
    mimetype: string;
    isPaid: boolean;
    price: number;
    viewCount: number;
  };
  onTimeUpdate: () => void;
}

const Video = (props: IProps) => (
  <div>
    <video
      ref={props.videoRef}
      controls={!props.isExceedPreviewQuta}
      controlsList="nodownload"
      onTimeUpdate={props.onTimeUpdate}
    >
      <source src={props.video.uri} type="video/mp4" />
    </video>
    <p className="name">{ name }</p>
    <div className="file-meta">
      <p className="view">{ props.video.viewCount } views</p>
      <p className="price">{ props.video.price > 0 ? `Price ${props.video.price} USD` : 'Free' }</p>
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

export default Video;
