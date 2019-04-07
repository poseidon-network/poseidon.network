import Section from '../Section';
import Content from '../Content';
import SocialMedia from '../SocialMedia';
import { footer } from '../../data';

const Footer = () => (
  <Section
    bgColor="#232634"
    color="#fff"
  >
    <Content>
      <div className="main">
        <div className="left">
          <img className="logo" alt="logo" src="/static/img-logo2.png" />
          <p className="copy-right">POSEIDON NETWORK © 2018 All rights reserved.</p>
        </div>
        <div className="right">
          <div className="social">
          { footer.socialMediaList.map(({ imgUri, link, alt }) => (
            <SocialMedia key={imgUri} imgUri={imgUri} link={link} alt={alt} />
          ))}
          </div>
          <div>
            <a href="/" className="nav">About</a>
            <a href="/#partners" className="nav">Partner</a>
            <a href="/#roadmap" className="nav">Roadmap</a>
            <a href="/#team" className="nav">Team</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .main {
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .logo {
          width: 259px;
          margin: 0;
        }

        .copy-right {
          width: 431px;
          height: 19px;
          font-family: Lato;
          font-size: 16px;
          color: #ffffff;
          margin: 0;
        }

        .social {
          display: flex;
          justify-content: flex-end;
          margin-right: -14px;
        }

        .nav {
          color: #fff;
          margin-left: 20px;
        }

        @media only screen and (max-width: 665px) {
          .main {
            flex-direction: column;
            height: 100%;
          }

          .copy-right {
            height: initial;
            width: 100%;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </Content>
  </Section>
);

export default Footer;
