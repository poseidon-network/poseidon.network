import React from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';

import Section from './Section';
import Content from './Content';
import { header } from '../data';

const loadImage = (src: string) => (
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(src);
    image.onerror = err => reject(err);
    image.src = src;
  })
);

class Header extends React.Component {
  state = {
    mapSrc: '/static/img-map@3x.png',
    playVideo: false,
  };

  async componentDidMount() {
    await loadImage('/static/map.gif');
    this.setState({
      mapSrc: '/static/map.gif',
    });
  }

  handleClickPlay = () => {
    this.setState({
      playVideo: true,
    });
  }

  handleEnd = () => {
    this.setState({
      playVideo: false,
    });
  }

  render() {
    return (
      <Section bgColor="#222633" color="#fff">
        <Content>
          <div className="description-container">
            <div className="bg-rect" />
            <div className="bg-rect" />
            <div className="bg-rect" />
            <p>
              { header.description }
            </p>
          </div>
          <div className="media">
            { this.state.playVideo ?
              <video
                autoPlay
                className="map"
                onEnded={this.handleEnd}
                src="https://s3-ap-northeast-1.amazonaws.com/static.poseidon.network/poseidon.mp4"
              />
            :
              <React.Fragment>
                <div className="play-icon">
                  <FaRegPlayCircle onClick={this.handleClickPlay} color="#ff9300" size="60" />
                </div>
                <img className="map" alt="our nodes in the world map" src={this.state.mapSrc} />
              </React.Fragment>
            }
          </div>
          <style jsx>{`
            p {
              text-align: center;
              font-size: 22px;
              font-weight: bold;
              line-height: 1.36;
              height: 90px;
              white-space: pre-line;
            }

            .media {
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .map {
              width: 100%;
              margin-bottom: 0px;
              height: 100%;
              max-width: 920px;
            }

            .play-icon {
              position: absolute;
              cursor: pointer;
            }

            .description-container {
              position: relative;
            }

            .bg-rect {
              width: 311px;
              height: 6px;
              opacity: 0.3;
              position: absolute;
              background-image: linear-gradient(to right, rgba(170, 209, 204, 0), #aad1cc 52%, rgba(170, 209, 204, 0));
            }

            .bg-rect:nth-child(1) {
              top: 37px;
            }

            .bg-rect:nth-child(2) {
              top: 66px;
            }

            .bg-rect:nth-child(3) {
              top: 95px;
            }

            @media only screen and (min-width: 600px) {
              p {
                font-size: 26px;
                margin-bottom: 80px;
                line-height: 1.40;
              }

              .bg-rect:nth-child(1) {
                top: 45px;
              }

              .bg-rect:nth-child(2) {
                top: 82px;
              }

              .bg-rect:nth-child(3) {
                top: 118px;
              }
            }
          `}</style>
        </Content>
      </Section>
    );
  }
}

export default Header;
