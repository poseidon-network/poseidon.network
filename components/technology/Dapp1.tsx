import Section from '../Section';
import Content from '../Content';
import P from '../P';
import Col from '../Col';
import H2 from '../H2';

import { styles } from '../../constants';

const Dapp1 = () => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="8px 0 116px"
    >
      <Content direction="row" mStyle="align-items: center;">
        <Col>
          <H2 style="line-height: 1.63; width: 154px;" mStyle="width:100%;">
            Poseidon Network Dapps
          </H2>
        </Col>
        <Col style="flex: 2;">
          <div className="feature">
            <img src="/static/icon-node.svg" />
            <P>Node Selection Algorithm</P>
          </div>
          <div className="feature">
            <img src="/static/icon-prediction.svg" />
            <P>Caching Prediction Algorithm</P>
          </div>
          <div className="feature">
            <img src="/static/icon-pricing.svg" />
            <P>Flexible QCDN pricing and smart contract</P>
          </div>
          <div className="feature">
            <img src="/static/icon-contrract.svg" />
            <P>QEdge Voting and Reward smart contract </P>
          </div>
          <div className="feature">
            <img src="/static/icon-lockup.svg" />
            <P>Payout and Lockup Cycle smart contract </P>
          </div>
        </Col>
      </Content>
      <style jsx>{`
        .feature {
          display: flex;
          align-items: center;
        }

        img {
          margin-right: 26px;
        }
      `}</style>
    </Section>
  );
};

export default Dapp1;
