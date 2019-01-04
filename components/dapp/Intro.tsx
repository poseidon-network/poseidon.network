import Layout from '../Layout';
import Content from '../Content';

const Intro = () => (
  <Layout
    backgroundImage="/static/img-bg-1@2x.jpg"
    bgColor="#1d202b"
    color="#d7f2ee"
    padding="0"
  >
    <Content>
      <div className="main">
        <div className="col">
          <p className="small-title">Build Sharing Economy</p>
          <h1 className="title">TRON's First Decentralized Content Network</h1>
          <p className="description">Next-Generation Content Layer (CDN + DSN), incentivized by TRX. Utilized unused bandwidth and storage from any NAS, desktop, or mobile devices around the world. It’s distributed, efficient, and integrates perfectly with existing internet and blockchain infrastructure. </p>
          <div className="btn-area">
            <a className="btn" href="https://www.pgyer.com/SszB">
              Download the App
            </a>
          </div>
        </div>
        <img src="/static/img-female-1.svg" className="img_female_1" />
      </div>
      <style jsx>{`
        .main {
          height: calc(100vh - 105px);
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .col {
          padding-top: 85px;
        }

        .small-title {
          width: 164px;
          height: 19px;
          font-family: Lato;
          font-size: 16px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #90cfbe;
        }

        .title {
          width: 460px;
          height: 78px;
          font-family: Montserrat;
          font-size: 32px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #d7f2ee;
        }

        .description {
          width: 460px;
          height: 140px;
          font-family: Lato;
          font-size: 16px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.75;
          letter-spacing: normal;
          color: #d7f2ee;
        }

        .img_female_1 {
          margin-top: 50px;
          margin-right: 179px;
          display: none;
        }

        .btn-area {
          margin-top: 57px;
        }

        .btn {
          width: 340px;
          height: 80px;
          border-radius: 40px;
          background: trasparent;
          color: #d7f2ee;
          border: 1px solid #d7f2ee;
          padding: 20px 75px;
        }

        @media only screen and (max-width: 1120px) {
          .main {
            height: 100%;
            padding-top: 30px;
          }

          .col {
            padding-top: 0;
            padding-bottom: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .title {
            margin-bottom: 30px;
          }

          .title, .description {
            width: 80%;
            height: initial;
            text-align: center;
          }

        }
      `}</style>
    </Content>
  </Layout>
);

export default Intro;
