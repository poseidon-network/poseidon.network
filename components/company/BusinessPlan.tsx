// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '../Section';
import H2 from '../H2';
import P from '../P';
import Button from '../Button';
import Content from '../Content';
import { styles } from '../../constants';
import Col from '../Col';
import { withTranslation } from '../../i18n';

const BusinessPlan = ({ t }: ITrans) => (
  <Section padding="25px 0 80px 0" bgColor={styles.darkLight} color="#1c1c1d">
    <Content mStyle="margin-top: -100px;" direction="row">
      <Col flex style="align-items: center;">
        <img className="img-company" src="/static/img-company@2x.png" />
      </Col>
      <Col>
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <H2 mStyle="text-align: center;" margin="70px 0 15px 0;">
            {t('company.nodesnetwork')}
          </H2>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
          <P mStyle="text-align: center;">
            {t('company.nodesnetwork.description')}
          </P>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp" delay={800}>
          <Col mStyle="align-items: center; marginTop: '80px' ">
            <Button
              title={t('company.businessplanbtn')}
              uri="https://app.gitbook.com/@poseidon-network/s/business-plan/roadmap-in-2021"
              width="80%"
              mStyle="width: 90%; margin: auto; margin-bottom: 30px;"
              sStyle="width: 100%; padding: 18px 12px; margin: auto"
            />
          </Col>
        </ScrollAnimation>
      </Col>
    </Content>
    <style jsx>{`
      .img-company {
        width: 398px;
        height: 444px;
        object-fit: contain;
      }

      @media only screen and (max-width: 554px) {
        .img-company {
          width: 100%;
        }
      }
    `}</style>
  </Section>
);

export default withTranslation(['company'])(BusinessPlan);
