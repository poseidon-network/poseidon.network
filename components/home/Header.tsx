import React from 'react';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import SocialMedia from './SocialMedia';
import Col from '../Col';
import Button from '../Button';
import P from '../P';

import { footer } from '../../data';
import { styles } from '../../constants';

const Header = () => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="110px 0 120px"
    >
      <Content direction="row">
        <Col
          style="display: none;"
          mStyle="display: flex; margin-bottom: 120px;"
          sStyle="display: flex; margin-bottom: 60px;"
        >
          <img className="top-img" src="/static/key-vision@2x.png" />
        </Col>
        <Col style="margin-right: 27px;" mStyle="margin: 0;">
          <H2 margin="8px 0 30px">
            A Blockchain Transport
            <br />
            Layer Solution
          </H2>
          <P margin="0">
            Next-Generation Content Layer (CDN + DSN), incentivized by TRX.
            Utilized unused bandwidth and storage from NAS, desktop, and mobile
            devices around the world. It’s distributed, efficient, and
            integrates perfectly with existing internet and blockchain
            infrastructure.{' '}
          </P>
          <div className="btn-wrapper">
            <Button
              title="Whitepaper"
              uri="http://ipfs.poseidon.network/ipfs/QmUzzcKXhturgVu8BgFhf7bmnf2ittC7d9T9bXwuX5NEXB"
            />
          </div>
          <div className="social-medias">
            <H3 margin="0 30px 0 0" sStyle="margin: 0;">
              Join Our Community
            </H3>
            <div className="social-medias__imglist">
              {footer.socialMediaList.map(({ imgUri, link, alt }) => (
                <SocialMedia
                  key={imgUri}
                  imgUri={imgUri}
                  link={link}
                  alt={alt}
                />
              ))}
            </div>
          </div>
        </Col>
        <Col
          flex
          style="align-items: center;"
          mStyle="display: none;"
          sStyle="display: none;"
        >
          <img className="right-img" src="/static/key-vision@2x.png" />
        </Col>
      </Content>
      <style jsx>{`
        .title {
          max-width: 460px;
          min-width: 300px;
          height: 78px;
          font-family: Montserrat;
          font-size: 32px;
          font-weight: bold;
          color: #d7f2ee;
        }

        .btn-wrapper {
          margin-top: 30px;
        }

        .social-medias {
          display: flex;
          margin-top: 61px;
          align-items: center;
        }

        .social-medias__imglist {
          margin-top: 2px;
          width: 150px;
          display: flex;
          justify-content: space-between;
        }

        .right-img {
          width: 556px;
          height: 499px;
          object-fit: contain;
        }

        @media only screen and (max-width: 768px) {
          .btn-wrapper {
            margin-top: 75px;
          }

          .top-img {
            width: 100%;
            object-fit: contain;
          }

          .social-medias {
            margin-top: 60px;
            flex-direction: column;
          }

          .social-medias__imglist {
            margin-top: 22px;
          }
        }

        @media only screen and (max-width: 554px) {
          .btn-wrapper {
            margin-top: 60px;
          }

          .top-img {
            height: 282px;
          }

          .social-medias {
            margin-top: 120px;
            flex-direction: column;
          }

          .social-medias__imglist {
            margin-top: 22px;
          }
        }
      `}</style>
    </Section>
  );
};

export default Header;
