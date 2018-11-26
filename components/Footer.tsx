import Layout from './Layout';
import SocialMedia from './SocialMedia';
import { footer } from '../data';

const Footer = () => ((
  <Layout bgColor="#222633" color="#fff">
    <div className="socialMedia-container">
      { footer.socialMediaList.map(({ imgUri, link, alt }) => (
        <SocialMedia key={imgUri} imgUri={imgUri} link={link} alt={alt} />
      ))}
    </div>
    <div className="row">
      <img className="logo" alt="logo" src="./static/Logo.png" />
    </div>
    <div className="row">
      <a href="mailto:hi@poseidon.network">{ footer.email }</a>
    </div>
    <div className="row">
      <p>{ footer.copyright }</p>
    </div>

    <style jsx>{`
      .socialMedia-container {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        margin-bottom: 60px;
      }

      .logo {
        height: 56px;
      }

      .row {
        margin: 12px auto;
        display: flex;
        justify-content: center;
      }

      p {
        font-size: 13px;
      }
    `}</style>
  </Layout>
));

export default Footer;
