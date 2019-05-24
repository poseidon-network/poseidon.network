import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import { styles } from '../../constants';
import P from '../P';
import Col from '../Col';
import Button from '../Button';

const Miner = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px 0 120px"
    >
      <Content direction="row">
        <Col flex mStyle="align-items: center; margin-bottom: 60px;">
          <img src="/static/img-miner.svg" />
        </Col>
        <Col>
          <H2 margin="0 0 15px">Become Miner</H2>
          <P margin="0 0 60px">
            We provide a platform to everyone for sharing idel bandwidth. Once
            you go out, you can provide the Wifi bandwidth, storage and other
            resources to us, and we will give you the rewards you deserve. As
            for those idel resources, we sold them to companies in need. Share
            your idle resources like Airbnb or Uber.
          </P>
          {/* <Button title="Mobile App Coming soon" uri="" margin="0 0 16px" />
          <Button title="Desktop App Coming soon" uri="" margin="0 0 16px" />
          <Button title="NAS Coming soon" uri="" /> */}
        </Col>
      </Content>
      <style jsx>{`
        img {
          max-width: 493px;
          width: 100%;
        }
      `}</style>
    </Section>
  );
};

export default Miner;
