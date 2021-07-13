import Section from '../Section';
import Content from '../Content';

const SocialSharing = () => (
  <Section
    backgroundImage="/static/img-bg-2@2x.jpg"
    bgColor="#1d202b"
    color="#d7f2ee"
    padding="0"
  >
    <Content>
      <div className="main">
        <div className="col left">
          <p className="title">Social Sharing</p>
          <p className="description">
            Share your life, tag a price, your fans can pay to join your life
            and you can receive extra income.
          </p>
          <p className="description">Photo, video and live streaming</p>
          <p className="description">
            Share your friends contents, and you can get a cut
          </p>
        </div>
        <div className="col center">
          <img className="phone" src="/static/phone.png" />
          <img src="/static/img-trident.svg" />
        </div>
        <div className="col right">
          <p className="title">Miner</p>
          <p className="description">
            Share unused resources to earn passive income
          </p>
          <p className="description">
            5G is arriving, and mobile edge is going to be a reality
          </p>
        </div>
      </div>
      <style jsx>{`
        .main {
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .left {
          padding-top: 337px;
        }

        .right {
          padding-top: 203px;
        }

        .title {
          font-family: Montserrat;
          font-size: 24px;
          font-weight: bold;
          line-height: 1.33;
          color: #d7f2ee;
        }

        .description {
          width: 240px;
          font-family: Lato;
          font-size: 16px;
          line-height: 1.5;
          color: #d7f2ee;
          margin-bottom: 24px;
          margin-top: 0;
        }

        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .phone {
          width: 300px;
          height: 600px;
          position absolute;
        }

        @media only screen and (max-width: 1120px) {
          .main {
            height: 100%;
          }

          .left {
            padding-top: 200px;
          }
        }

        @media only screen and (max-width: 665px) {
          .main {
            height: 100%;
            flex-direction: column;
            align-items: center;
          }

          img {
            display: none;
          }

          .left, .right {
            padding: 30px;
          }
        }
      `}</style>
    </Content>
  </Section>
);

export default SocialSharing;
