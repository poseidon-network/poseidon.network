import Layout from './Layout';
import Content from './Content';
import { header } from '../data';

const Header = () => ((
  <Layout bgColor="#222633" color="#fff">
    <Content>
      <p>
        { header.description }
      </p>
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
          max-width: 933px;
          margin: auto;
        }

        @media only screen and (min-width: 600px) {
          p {
            font-size: 26px;
            margin-bottom: 80px;
            line-height: 1.40;
          }
        }
      `}</style>
    </Content>
  </Layout>
));

export default Header;
