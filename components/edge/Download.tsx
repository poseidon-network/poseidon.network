// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H1 from '../H1';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';

import { withTranslation } from '../../i18n';
import { styles } from '../../constants';

const Download = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="10vh 0"
      mStyle="padding-top: 30px; padding-bottom: 30px;"
    >
      <Content direction="row">
        <Col style="margin: 0 80px;" mStyle="margin: 0 auto;">
          <img className="instruction-img" src="/static/qedge-img-1@2x.png" />
        </Col>
        <Col>
          <H1 margin="0 0 10px" sStyle="text-align: left; margin-top: 2.5rem;">
            1
          </H1>
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <H2 margin="0 0 10px" sStyle="text-align: left;">
              {t('download.title')}
            </H2>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
            <P sStyle="text-align: left;">{t('download.description')}</P>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInUp" delay={800}>
            <div className="download">
              <a
                target="_blank"
                href="https://apps.apple.com/app/qqq-app/id1468063328"
              >
                <img alt="apple store" src="/static/img-ios-badge@2x.png" />
              </a>

              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=network.poseidon.qqq.app"
              >
                <img alt="google play" src="/static/img-google-badge@2x.png" />
              </a>
            </div>
          </ScrollAnimation>
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 100%;
          max-width: 500px;
          object-fit: contain;
        }

        .download img {
          width: 48%;
          min-width: 40%;
        }

        .download img:first-child {
          margin-right: 2%;
        }

        @media only screen and (max-width: 1024px) {
          img {
            width: 100%;
            margin-bottom: 20px;
          }

          .instruction-img {
            min-width: 220px;
            height: 30vh;
            display: block;
            margin: auto;
          }

          .download img {
            display: block;
            margin-right: auto;
            margin-left: auto;
            width: 100%;
            max-width: 350px;
          }

          .download img:first-child {
            margin-right: auto;
          }
        }

        @media only screen and (max-width: 554px) {
          img {
            width: 100%;
          }
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('edge')(Download);
