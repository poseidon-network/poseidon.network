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
        <Col style="margin: 0 80px;">
          <img className="instruction-img" src="/static/qedge-img-3@2x.png" />
        </Col>
        <Col>
          <H1 margin="0 0 10px">3</H1>
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <H2 margin="0 0 10px">{t('gain.title')}</H2>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
            <P>{t('gain.description')}</P>
          </ScrollAnimation>
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
            height: 30vh;
            display: block;
            margin: auto;
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
