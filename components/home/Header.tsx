import React from 'react';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import { footer } from '../../data';
import SocialMedia from './SocialMedia';
import { styles } from '../../constants';

const Header = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="0 0 114px"
    >
      <Content>
        <div className="main">
          <H2 margin="32px 0 30px">A Blockchain Transport<br/>Layer Solution</H2>
          <p className="description">Next-Generation Content Layer (CDN + DSN), incentivized by TRX. Utilized unused bandwidth and storage from NAS, desktop, and mobile devices around the world. It’s distributed, efficient, and integrates perfectly with existing internet and blockchain infrastructure. </p>
          <H3>Join Our Community</H3>
          <div className="social-medias">
            { footer.socialMediaList.map(({ imgUri, link, alt }) => (
              <SocialMedia key={imgUri} imgUri={imgUri} link={link} alt={alt} />
            ))}
          </div>
        </div>
        <style jsx>{`
          .main {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding-top: 88px;
          }

          .title {
            width: 460px;
            height: 78px;
            font-family: Montserrat;
            font-size: 32px;
            font-weight: bold;
            color: #d7f2ee;
          }

          .description {
            width: 460px;
            height: 140px;
            font-family: Lato;
            font-size: 16px;
            line-height: 1.75;
            color: #d7f2ee;
            margin-top: 0;
            margin-bottom: 60px;
          }

          .social-medias {
            display: flex;
            margin-top: 32px;
          }

          @media only screen and (max-width: 1120px) {
            .main {
              height: 100%;
              padding-top: 30px;
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
    </Section>
  );
};

export default Header;
