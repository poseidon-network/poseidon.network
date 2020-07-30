// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';
import { styles } from '../../constants';
import { withTranslation } from '../../i18n';

const Intro = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="80px 0 70px"
      style="min-height: 100vh;"
    >
      <Content direction="row">
        <Col
          flex
          style="margin: 0 108px 0 0;"
          mStyle="margin: 0 0 92px; align-items: center;"
        >
          <img src="/static/img-token-vision.svg" />
        </Col>
        <Col flex style="justify-content: center;">
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <H2 margin="0 0 30px;" mStyle="margin: 0 0 15px;">
              {t('token.title')}
            </H2>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
            <P mStyle="text-align: left;" sStyle="text-algin: left;">
              {t('token.description')}
            </P>
          </ScrollAnimation>
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 100%;
          max-width: 446px;
        }

        @media only screen and (max-width: 1024px) {
        }

        @media only screen and (max-width: 554px) {
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('token')(Intro);
