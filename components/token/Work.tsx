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
        <Col />
        <Col>
          <H2 margin="0 0 20px">How doest it work</H2>
          <P margin="0">A - Requesting Content from Worker Node
Alice is requesting content form worker Node C, before WN-C is starting to deliver, it sends a signal to its neighboring SN-A, and after the Content is delivered, Alice sends a confirmed signal to SN-A, and we shall call it “Verified”.</P>
        </Col>
      </Content>
      <style jsx>{`
    `}</style>
    </Section>
  );
};

export default Work;
