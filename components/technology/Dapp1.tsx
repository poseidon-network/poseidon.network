import Section from '../Section';
import Content from '../Content';
import P from '../P';
import Col from '../Col';

import { styles } from '../../constants';

const Dapp1 = () => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="8px 0 116px"
    >
      <Content direction="row">
        <Col>
          <h2>Poseidon<br/>Network<br/>Dapps</h2>
        </Col>
        <Col>
          <P margin="0 0 30px">Node Selection Algorithm</P>
          <P margin="0 0 30px">Caching Prediction Algorithm</P>
          <P margin="0 0 30px">Flexible QCDN pricing and smart contract</P>
          <P margin="0 0 30px">QEdge Voting and Reward smart contract </P>
          <P margin="0">Payout and Lockup Cycle smart contract </P>
        </Col>
      </Content>
      <style jsx>{`
        h2 {
          height: 240px;
          font-size: 60px;
          font-weight: 600;
          line-height: 1.33;
          letter-spacing: normal;
          color: #d7f2ee;
        }
      `}</style>
    </Section>
  );
};

export default Dapp1;
