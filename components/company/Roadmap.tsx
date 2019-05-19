import Section from '../Section';
import RoadmapItem from './RoadmapItem';
import H2 from '../H2';
import P from '../P';
import Content from '../Content';
import { roadmap2018, roadmap2019, roadmap2020 } from '../../data';
import { styles } from '../../constants';
import Col from '../Col';
import H3 from '../H3';

const Roadmap = () => (
  <Section padding="120px" bgColor={styles.darkLight} color="#1c1c1d">
    <H2 id="roadmap" center margin="0 0 5px">
      Roadmap
    </H2>
    <Content direction="row">
      <P margin="0 0 60px">
        There’s so much more to Poseidon than technology. At the heart of our
        work, we aim to improve human lives — and from the beginning, we’ve
        grown with a deliberate focus on transparency, integrity, and inclusion.
      </P>
    </Content>
    <Content>
      <H3 margin="0 0 13px" center>
        2018
      </H3>
      {roadmap2018.map((props, index) => (
        <RoadmapItem key={index} right={index % 2 === 0} {...props} />
      ))}

      <H3 margin="15px 0 10px" center>
        2019
      </H3>
      {roadmap2019.map((props, index) => (
        <RoadmapItem key={index} right={index % 2 === 1} {...props} />
      ))}

      <H3 margin="15px 0 10px" center>
        2020
      </H3>
      {roadmap2020.map((props, index) => (
        <RoadmapItem key={index} right={index % 2 === 0} {...props} />
      ))}
    </Content>

    <Content style="margin-top: 60px;" direction="row">
      <Col flex style="align-items: center;">
        <img className="img-company" src="/static/img-company@2x.png" />
      </Col>
      <Col>
        <H2 mStyle="text-align: left;" margin="0 0 57px;">
          World’s largest nodes network
        </H2>
        <P mStyle="text-align: left;">
          For cities that meet the following four or more conditions, the
          POSEIDON NETWORK will seek long-term cooperative partnership with
          companies, government agencies, universities, etc. as stable large
          nodes; the POSEIDON NETWORK will give priority to install experiment
          nodes in cities that meet the following two or more conditions.
        </P>
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

export default Roadmap;
