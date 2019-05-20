import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import P from '../P';
import Col from '../Col';
import { styles } from '../../constants';

const POD = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px"
    >
      <H2 center margin="0 0 60px">
        Proof of Delivery
      </H2>
      <Content direction="row">
        <Col style="margin-right: 31px;" mStyle="margin-right: 0;">
          <img src="/static/img-proof-a@2x.png" />
          <H3 center margin="0 0 15px;">
            A - Requesting Content from Worker Node
          </H3>
          <P mStyle="text-align: left;">
            Alice is requesting content form worker Node C, before WN-C is
            starting to deliver, it sends a signal to its neighboring SN-A, and
            after the Content is delivered, Alice sends a confirmed signal to
            SN-A, and we shall call it “Verified”.
          </P>
        </Col>
        <Col>
          <img src="/static/img-proof-b@2x.png" />
          <H3 center margin="0 0 15px;">
            B - Requesting Content from Super Node
          </H3>
          <P mStyle="text-align: left;">
            Bob is requesting content from Super Node B. Since SN-Bcan not
            verify itself, SN-B sends signal to neighboring SN-A, and after
            content is delivered, Bob Sends a confirmed signal to SN-A, and we
            shall call it “Verified”.
          </P>
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 100%;
          object-fit: contain;
          margin-bottom: 30px;
        }
      `}</style>
    </Section>
  );
};

export default POD;
