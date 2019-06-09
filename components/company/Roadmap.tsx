// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '../Section';
import RoadmapItem from './RoadmapItem';
import H2 from '../H2';
import P from '../P';
import Content from '../Content';
import { roadmap2018, roadmap2019, roadmap2020 } from '../../data';
import { styles } from '../../constants';
import Col from '../Col';
import H3 from '../H3';
import { withTranslation } from '../../i18n';

const Roadmap = ({ t }: ITrans) => (
  <Section padding="120px" bgColor={styles.darkLight} color="#1c1c1d">
    <ScrollAnimation animateOnce animateIn="fadeInUp">
      <H2 id="roadmap" center margin="0 0 5px">
        {t('company.roadmap')}
      </H2>
    </ScrollAnimation>
    <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
      <Content direction="row">
        <P margin="0 0 60px">{t('company.roadmap.description')}</P>
      </Content>
    </ScrollAnimation>
    <Content>
      <H3 margin="0 0 13px" center>
        2018
      </H3>
      {roadmap2018.map(({ description, ...props }, index) => (
        <RoadmapItem
          key={index}
          right={index % 2 === 0}
          description={t(description)}
          {...props}
        />
      ))}

      <H3 margin="15px 0 10px" center>
        2019
      </H3>
      {roadmap2019.map(({ description, ...props }, index) => (
        <RoadmapItem
          key={index}
          right={index % 2 === 1}
          description={t(description)}
          {...props}
        />
      ))}

      <H3 margin="15px 0 10px" center>
        2020
      </H3>
      {roadmap2020.map(({ description, ...props }, index) => (
        <RoadmapItem
          key={index}
          right={index % 2 === 0}
          description={t(description)}
          {...props}
        />
      ))}
    </Content>

    <Content style="margin-top: 60px;" direction="row">
      <Col flex style="align-items: center;">
        <img className="img-company" src="/static/img-company@2x.png" />
      </Col>
      <Col>
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <H2 mStyle="text-align: left;" margin="0 0 15px;">
            {t('company.nodesnetwork')}
          </H2>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
          <P mStyle="text-align: left;">
            {t('company.nodesnetwork.description')}
          </P>
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

export default withTranslation('company')(Roadmap);
