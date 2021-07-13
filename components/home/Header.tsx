import React from 'react';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import SocialMedia from './SocialMedia';
import Col from '../Col';
import Button from '../Button';
import P from '../P';

import { withTranslation, i18n } from '../../i18n';
import { footer, whitepaperList } from '../../data';
import { styles } from '../../constants';
import { getWhitepaper } from '../../utils';

const Header = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="110px 0 120px"
      style="min-height: 100vh;"
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
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <H2 margin="8px 0 30px">{t('home.title')}</H2>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
            <P margin="0">{t('home.description')}</P>
          </ScrollAnimation>

          <Button
            margin="30px 0 0"
            sStyle="display: none;"
            title={t('home.whitepaper')}
            uri={getWhitepaper(i18n.language).uri}
          />

          <Content
            style="display: none;"
            sStyle="display: flex; align-items: normal; margin-top: 50px;"
          >
            {whitepaperList.map(item => (
              <Col key={item.flag} flex style="align-items: center;">
                <div className={`flag-icon flag-icon-${item.flag}`} />
                <Button
                  margin="15px 0 20px;"
                  title={item.title}
                  uri={item.uri}
                />
              </Col>
            ))}
          </Content>

          <div className="social-medias">
            <H3 margin="0 40px 0 0" sStyle="margin: 0;">
              {t('home.join')}
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

        @media only screen and (max-width: 1024px) {
          .btn-wrapper {
            margin-top: 75px;
          }

          .top-img {
            width: 100%;
            object-fit: contain;
            max-height: 499px;
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

export default withTranslation('home')(Header);
