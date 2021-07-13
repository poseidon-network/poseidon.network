// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';
import Button from '../Button';
import RParallax from '../RParallax';
import { styles } from '../../constants';
import { withTranslation } from '../../i18n';

const SettingUp = ({ t }: ITrans) => (
  <Section bgColor={styles.darkLight} color="#fff" padding="120px 0">
    <RParallax percentage={0.5} speed={-13}>
      <Content direction="row" style="align-items: center;">
        <Col
          flex
          style="flex-direction: row; padding-right: 93px;"
          mStyle="padding-right: 0; margin-bottom: 60px;"
        >
          <img className="screen1" src="/static/screen-1@2x.png" />
          <img className="screen2" src="/static/screen-2@2x.png" />
        </Col>
        <Col>
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <H2 margin="0 0 15px">{t('home.mobile')}</H2>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
            <P margin="0 0 30px 0">{t('home.mobile.description')}</P>
          </ScrollAnimation>
          <Button
            target="_open"
            title={t('home.mobile.download')}
            uri="https://github.com/poseidon-network/qlauncher-linux"
          />
        </Col>
        <style jsx>{`
          .col {
            flex: 1;
          }

          img {
            height: 500px;
          }

          .screen2 {
            margin-left: -45px;
          }

          @media only screen and (max-width: 1024px) {
          }

          @media only screen and (max-width: 554px) {
            img {
              height: 345px;
            }
          }
        `}</style>
      </Content>
    </RParallax>
  </Section>
);

export default withTranslation('home')(SettingUp);
