// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';

import { styles } from '../../constants';
import { withTranslation } from '../../i18n';

const Scenario = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="120px 0"
    >
      <Content direction="row">
        <Col style="margin-right: 30px" mStyle="margin-right: 0;">
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <H2 margin="0 0 15px">{t('tech.dapps.scenario')}</H2>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
            <P mStyle="margin-bottom: 60px;">
              {t('tech.dapps.scenario.description')}
            </P>
          </ScrollAnimation>
        </Col>
        <Col>
          <img src="/static/img-layer-1@2x.png" />
          <img src="/static/img-layer-2@2x.png" />
          <img src="/static/img-layer-3@2x.png" />
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('technology')(Scenario);
