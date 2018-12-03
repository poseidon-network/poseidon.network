import Layout from './Layout';
import Content from './Content';
import { header } from '../data';

const Header = () => ((
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
      <img alt="world map" src="./static/img-map@3x.png" />

      <style jsx>{`
        p {
          text-align: center;
          font-size: 22px;
          font-weight: bold;
          line-height: 1.36;
          height: 90px;
          white-space: pre-line;
        }

        img {
          width: 100%;
          margin-bottom: 0px;
          max-width: 920px;
          margin: auto;
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
));

export default Header;
