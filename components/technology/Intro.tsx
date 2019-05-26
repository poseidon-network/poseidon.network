import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';

import { styles } from '../../constants';

const Intro = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="110px 0"
    >
      <Content direction="row">
        <Col>
          <img src="/static/img-sharingplatform.svg" />
        </Col>
        <Col>
          <H2 margin="0 0 10px">
            The Lights towards the next Internet Sources Sharing Platform
          </H2>
          <P>
            Next-Generation Content Acceleration Layer (CDN + DSN), incentivized
            by Token Economy, it’s cheaper yet faster. Utilized unused bandwidth
            and storage from any NAS, desktop, or mobile devices around the
            world. It’s distributed, efficient, and integrates perfectly with
            existing internet and blockchain infrastructure Served as a
            bandwidth optimization mechanism for every type of web content
            (static file / video on demand / live streaming)
          </P>
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 100%;
          max-wdith: 500px;
          min-width: 300px;
          object-fit: contain;
        }

        @media only screen and (max-width: 768px) {
          img {
            width: 100%;
            margin-bottom: 160px;
          }
        }

        @media only screen and (max-width: 554px) {
          img {
            width: 100%;
          }
        }
      `}</style>
    </Section>
  );
};

export default Intro;
