// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';
import { styles } from '../../constants';

const Work = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px"
    >
      <Content direction="row">
        <Col
          flex
          style="justify-content: center; align-items: center; display: none;"
          mStyle="display: block; margin-bottom: 60px;"
        >
          <img src="/static/img-coins@2x.png" />
        </Col>
        <Col
          style="margin-right: 30px;"
          mStyle="margin-right: 0; margin-bottom: 60px;"
        >
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <H2 margin="0 0 20px">How doest it work</H2>
            <P margin="0">
              QQQ is the functional token of POSEIDON NETWORK platform, the most
              important part of POSEIDON NETWORK mainnet, furthermore, the only
              token in this ecosystem. Pay QQQ token to drive the services of
              POSEIDON NETWORK, or get QQQ from supplying your unused network
              resources.
            </P>
          </ScrollAnimation>
        </Col>
        <Col
          flex
          style="justify-content: center; align-items: center;"
          mStyle="display: none;"
        >
          <img src="/static/img-coins@2x.png" />
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

export default Work;
