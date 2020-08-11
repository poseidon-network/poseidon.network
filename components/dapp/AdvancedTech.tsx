import Section from '../Section';
import Content from '../Content';
import ListItem from './ListItem';

const AdvancedTech = () => (
  <Section bgColor="#d7f2ee" color="#222633" padding="0">
    <Content>
      <div className="main">
        <div className="left">
          <img src="/static/img-female-2.svg" className="female" />
        </div>
        <div className="right">
          <p className="title">Advanced Technology</p>
          <ul className="desc">
            <ListItem>
              Global IoT devices as Edge for blockchain last mile (QNAP NAS)
            </ListItem>
            <ListItem>Decentralized CDN for content delivering</ListItem>
            <ListItem>Support AWS S3、IPFS (decentralized storage)</ListItem>
          </ul>
          <a href="https://www.pgyer.com/SszB" className="btn">
            Try it out
          </a>
        </div>
      </div>
      <style jsx>{`
        .main {
          height: 100vh;
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
        }

        .title {
          width: 471px;
          height: 156px;
          font-family: Montserrat;
          font-size: 64px;
          font-weight: bold;
          color: #222633;
        }

        .desc {
          width: 471px;
          height: 96px;
          font-family: Lato;
          font-size: 16px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 2;
          letter-spacing: normal;
          color: #222633;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .btn {
          margin-top: 58px;
          display: block;
          width: 300px;
          height: 64px;
          border-radius: 40px;
          color: #222633;
          border: 1px solid #222633;
          padding: 17px 88px;
          font-weight: 600;
          font-size: 24px;
        }

        @media only screen and (max-width: 1120px) {
          .main {
            flex-direction: column;
            height: 100%;
          }
        }

        @media only screen and (max-width: 665px) {
          .right {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .title {
            width: 100%;
            text-align: center;
            font-size: 46px;
            height: initial;
          }

          .desc {
            width: 80%;
            height: initial;
          }

          img {
            width: 100%;
          }

          .btn {
            font-size: 20px;
          }
        }
      `}</style>
    </Content>
  </Section>
);

export default AdvancedTech;
