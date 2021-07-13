// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';
import Button from '../Button';
import { withTranslation } from '../../i18n';
import { styles } from '../../constants';

const Intro = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="112px 0 120px"
    >
      <Content direction="row">
        <Col>
          <img src="/static/key-vision@2x.png" />
        </Col>
        <Col mStyle="margin-bottom: 80px;">
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <H2 margin="90px 0 10px;align-items: center;">
              {t('company.title')}
            </H2>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
            <P>{t('company.description')}</P>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInUp" delay={800}>
            <Col mStyle="align-items: center; marginTop: '80px' ">
              <Button
                title={t('company.roadmapbtn')}
                uri="https://app.gitbook.com/@poseidon-network/s/business-plan/roadmap-in-2021"
                width="80%"
                mStyle="width: 90%; margin: auto; margin-top: 50px"
                sStyle="width: 100%; padding: 18px 12px; margin: auto"
              />
            </Col>
          </ScrollAnimation>
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 100%;
        }

        @media only screen and (max-width: 1024px) {
          img {
          width: 45%
          max-height: 499px;
          }
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('company')(Intro);
