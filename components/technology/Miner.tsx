import Section from '../Section';
import Content from '../Content';
import P from '../P';
import Col from '../Col';
import Button from '../Button';

import { styles } from '../../constants';

const Miner = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px"
    >
      <Content direction="row">
        <Col />
        <Col>
          <h2>Become Miner</h2>
          <P>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money. Does it end? Not usually because we are never satisfied. How many times have we convinced ourselves that if only we had some more money, life would be so sweet? But then, after receiving a substantial raise, we realize that it wasn’t enough and that we need more?</P>
        </Col>
      </Content>
      <Content direction="row" padding="190px 0 0 0">
        <Col style="margin-right: 40px">
          <Button title="Mobile App" uri=""/>
        </Col>
        <Col style="margin-right: 40px">
          <Button title="Desktop App" uri=""/>
        </Col>
        <Col>
          <Button title="NAS" uri=""/>
        </Col>
      </Content>
      <style jsx>{`
        h2 {
          height: 80px;
          font-family: Montserrat;
          font-size: 60px;
          font-weight: 600;
          line-height: 1.33;
          letter-spacing: normal;
          color: #d7f2ee;
          margin-bottom: 60px;
        }
      `}</style>
    </Section>
  );
};

export default Miner;
