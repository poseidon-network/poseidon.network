// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';
import { withNamespaces } from '../../i18n';
import { styles } from '../../constants';

const Intro = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="112px 0 120px"
    >
      <Content direction="row">
        <Col mStyle="margin-bottom: 100px;">
          <img src="/static/key-vision@2x.png" />
        </Col>
        <Col mStyle="margin-bottom: 100px;">
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <H2 margin="90px 0 10px">{t('company.title')}</H2>
            <P>{t('company.description')}</P>
          </ScrollAnimation>
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 556px;
          height: 499px;
          object-fit: contain;
        }

        @media only screen and (max-width: 1024px) {
          img {
            width: 100%;
          }
        }
      `}</style>
    </Section>
  );
};

export default withNamespaces('company')(Intro);
