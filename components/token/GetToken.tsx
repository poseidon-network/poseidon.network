import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import P from '../P';
import Col from '../Col';
import Button from '../Button';
import { styles } from '../../constants';

const GetToken = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px"
    >
      <Content direction="row">
        <Col
          flex
          style="margin-right: 30px;"
          mStyle="margin-right: 0; margin-bottom: 60px; align-items: center;"
        >
          <img src="/static/img-community-bounty@2x.png" />
        </Col>
        <Col>
          <H2 margin="0 0 60px">How to Get Poseidon Network QQQ</H2>
          <H3 margin="0 0 15px">Exchanges</H3>
          <P margin="0 0 20px">
            We provides a variety of exchanges to list QQQ and let people to buy
            it from fiat coin or cryptocurrencies.
          </P>
          <Button
            margin="0 0 60px;"
            title={
              <img
                style={{ width: 115, height: 20 }}
                src="/static/logo-bitforex@2x.png"
              />
            }
            uri="https://www.bitforex.com/cn/trade/spotTrading?commodityCode=QQQ&currencyCode=USDT"
          />
          <H3 margin="0 0 15px">Community Bounty</H3>
          <P margin="0 0 60px">
            We provide a diversity of bonty for our community, such as
            scholarship program, research development, testing volunteer,
            college ambassadar, etc. This is our vision for the future, our
            belief in the rise of you - on the community.
          </P>

          <Button title="Community" uri="/community" />
        </Col>
      </Content>
      <style jsx>{`
        img {
          max-width: 541px;
          width: 100%;
          margin-right: 35px;
        }
      `}</style>
    </Section>
  );
};

export default GetToken;
