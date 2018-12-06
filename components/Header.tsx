import React from 'react';
import Layout from './Layout';
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
  };

  async componentDidMount() {
    await loadImage('/static/map.gif');
    this.setState({
      mapSrc: '/static/map.gif',
    });
  }

  render() {
    return (
      <Layout bgColor="#222633" color="#fff">
        <Content>
          <div className="description-container">
            <div className="bg-rect" />
            <div className="bg-rect" />
            <div className="bg-rect" />
            <p>
              { header.description }
            </p>
          </div>
          <img alt="our nodes in the world map" className="map" src={this.state.mapSrc} />
          <style jsx>{`
            p {
              text-align: center;
              font-size: 22px;
              font-weight: bold;
              line-height: 1.36;
              height: 90px;
              white-space: pre-line;
            }

            .map {
              width: 100%;
              margin-bottom: 0px;
              height: 100%;
              max-width: 920px;
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
      </Layout>
    );
  }
}

export default Header;
