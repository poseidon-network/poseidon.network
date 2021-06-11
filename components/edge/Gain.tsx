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

const Gain = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="10vh 0"
      mStyle="padding-top: 30px; padding-bottom: 30px;"
    >
      <Content direction="row">
        <Col style="margin: 0 80px;" mStyle="margin: 0 auto;">
          <img
            className="instruction-img"
            src="/static/qlauncher_img_3@2x.png"
          />
        </Col>
        <Col>
          <H1 margin="0 0 10px" sStyle="text-align: left; margin-top: 2.5rem;">
            3
          </H1>
          <H2 margin="0 0 10px" sStyle="text-align: left;">
            {t('gain.title')}
          </H2>
          <P sStyle="text-align: left;">{t('gain.description')}</P>
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 100%;
          max-width: 500px;
          object-fit: contain;
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
            margin-top: 3rem;
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

export default withTranslation('edge')(Gain);
