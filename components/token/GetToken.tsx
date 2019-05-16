import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import P from '../P';
import Col from '../Col';
import { styles } from '../../constants';

const GetToken = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px"
    >
      <Content direction="row">
        <Col>
          <H2 margin="0 0 60px">How to Get Poseidon Network QQQ</H2>
          <H3 margin="0 0 32px">IEO</H3>
          <P margin="0 0 60px">A - Requesting Content from Worker Node
Alice is requesting content form worker Node C, before WN-C is starting to deliver, it sends a signal to its neighboring SN-A, and after the Content is delivered, Alice sends a confirmed signal to SN-A, and we shall call it “Verified”.</P>

          <H3 margin="0 0 32px">Community Bounty</H3>
          <P margin="0">A - Requesting Content from Worker Node
Alice is requesting content form worker Node C, before WN-C is starting to deliver, it sends a signal to its neighboring SN-A, and after the Content is delivered, Alice sends a confirmed signal to SN-A, and we shall call it “Verified”.</P>
        </Col>
        <Col />
      </Content>
      <style jsx>{`
    `}</style>
    </Section>
  );
};

export default GetToken;
