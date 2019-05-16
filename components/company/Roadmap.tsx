import Section from '../Section';
import RoadmapItem from './RoadmapItem';
import H2 from '../H2';
import P from '../P';
import Content from '../Content';
import { roadmap } from '../../data';
import { styles } from '../../constants';
import Col from '../Col';

const Roadmap = () => ((
  <Section padding="120px" bgColor={styles.darkLight} color="#1c1c1d">
    <H2 id="roadmap" margin="0 0 5px">Roadmap</H2>
    <Content direction="row">
      <Col>
        <P margin="0 0 58px">Focus is on face, body and breast cosmetic surgery. On the other hand, cosmetic surgery restores normal structures of the body and to improve appearance and self-esteem. Leipziger is a Board certified plastic surgeon with special expertise in cosmetic and reconstructive surgery of the face, breast and body. Addiction to cosmetic surgery Some people appear to become addicted to cosmetic surgery, possibly because of body dysmorphic disorder. </P>
      </Col>
      <Col />
    </Content>
    <Content>
      {
        roadmap.map((props, index) => (
          <RoadmapItem key={index} right={index % 2 === 1} {...props} />
        ))
      }
    </Content>

    <Content direction="row">
      <Col />
      <Col>
        <H2>World’s largest nodes network</H2>
        <P>Focus is on face, body and breast cosmetic surgery. On the other hand, cosmetic surgery restores normal structures of the body and to improve appearance and self-esteem. Leipziger is a Board certified plastic surgeon with special expertise in cosmetic and reconstructive surgery of the face, breast and body. Addiction to cosmetic surgery Some people appear to become addicted to cosmetic surgery, possibly because of body dysmorphic disorder. </P>
      </Col>
    </Content>
    <style jsx>{`
    `}</style>
  </Section>
));

export default Roadmap;
