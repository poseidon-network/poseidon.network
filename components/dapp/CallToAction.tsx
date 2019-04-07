import Section from '../Section';
import Content from '../Content';

const CallToAction = () => (
  <Section
    bgColor="#1d202b"
    color="#fff"
  >
    <Content>
      <div className="main">
        <div className="left">
          <p className="title">Start earning TRX, TODAY!</p>
          <p className="description">share your life or share your unused resources. Do both and double your earnings!</p>
          <a href="https://www.pgyer.com/SszB" className="btn">Get the App</a>
        </div>
        <div>
          <img className="logo-dollar" src="/static/img-logo-dollar.png" />
        </div>
      </div>
      <style jsx>{`
        .main {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
        }

        .title {
          width: 480px;
          height: 156px;
          font-family: Montserrat;
          font-size: 64px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #ffffff;
        }

        .description {
          width: 480px;
          height: 48px;
          font-family: Lato;
          font-size: 16px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.5;
          letter-spacing: normal;
          color: #ffffff;
        }

        .btn {
          width: 260px;
          height: 51px;
          border-radius: 25.5px;
          padding: 16px 69px;
          border: 1px solid #fff;
          color: #fff;
          display: block;
          margin-top: 48px;
        }

        .logo-dollar {
          width: 200px;
        }

        @media only screen and (max-width: 1120px) {
          .main {
            flex-direction: column;
            height: 100%;
            align-items: center;
            padding-bottom: 30px;
          }

          .title {
            font-size: 46px;
          }

          .title, .description {
            width: 80%;
            height: initial;
          }
        }
      `}</style>
    </Content>
  </Section>
);

export default CallToAction;
