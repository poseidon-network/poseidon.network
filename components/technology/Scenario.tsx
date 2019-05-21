import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';

import { styles } from '../../constants';

const Scenario = () => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="120px 0"
    >
      <Content direction="row">
        <Col style="margin-right: 30px" mStyle="margin-right: 0;">
          <H2 margin="0 0 15px">
            Poseidon Network Dapps
            <br />
            Scenario
          </H2>
          <P mStyle="margin-bottom: 60px;">
            The upper chart shows the application scenarios of Apps and dApps,
            including live broadcast, video sharing, photo sharing, file
            sharing, update file distribution, and future block chain identity,
            Trust Execution Environment (TEE), etc., and unlimited
            possibilities.
            <br />
            The middle chart displays smart contracts and algorithms. The
            various algorithms maintain the efficiency of the POSEIDON NETWORK
            and form the supervision layer of it.
            <br />
            The lower chart demonstrates the entire underlying architecture,
            which includes QCDN, DSN, and Block chain. QCDN also contains QEdge
            as the node and the Qontroller of the distributor.
          </P>
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

export default Scenario;
