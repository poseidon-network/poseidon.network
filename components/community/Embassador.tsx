// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import { styles } from '../../constants';
import P from '../P';
import Col from '../Col';
import Button from '../Button';
import { withTranslation } from '../../i18n';

const Embassador = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="120px 0 120px"
    >
      <H2 center margin="0 0 60px">
        {t('community.ambassador')}
      </H2>
      <Content direction="row" mStyle="flex-direction: row;">
        <Col
          style="margin-right: 69px;"
          mStyle="margin-right: 0;"
          sStyle="margin-bottom: 60px;"
        >
          <H3 mStyle="text-align: left;" margin="0 0 15px">
            {t('community.ambassador.title')}
          </H3>
          <P
            margin="0"
            mStyle="text-align: left;"
            sStyle="margin-bottom: 10px; text-align: left;"
          >
            {t('community.ambassador.description')}
          </P>
        </Col>
        <Col style="width: 100%;">
          <ul>
            <ScrollAnimation animateOnce animateIn="fadeInUp">
              <li>
                <img className="check" src="/static/check.svg" />
                <H3>{t('community.ambassador.related1')}</H3>
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInUp" delay={200}>
              <li>
                <img className="check" src="/static/check.svg" />
                <H3>{t('community.ambassador.related2')}</H3>
              </li>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
              <li>
                <img className="check" src="/static/check.svg" />
                <H3>{t('community.ambassador.related3')}</H3>
              </li>
            </ScrollAnimation>
          </ul>
        </Col>
      </Content>
      <Content style="margin-top: 60px;">
        <H2 center margin="0 0 30px">
          {t('community.ambassador.interested')}
        </H2>
        <Col flex style="align-items: center;">
          <Button
            title={t('community.ambassador.apply')}
            uri="https://www.surveycake.com/s/w48yR"
            width="45%"
            mStyle="width: 90%;"
            sStyle="width: 100%; padding: 18px 12px;"
          />
        </Col>
      </Content>
      <style jsx>{`
        ul {
          margin: 0;
          padding: 0;
        }

        li {
          margin-bottom: 20px;
          list-style-type: none;
          display: flex;
          align-items: center;
        }

        .check {
          margin-right: 30px;
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('community')(Embassador);
