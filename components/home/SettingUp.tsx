import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';
import Button from '../Button';
import { styles } from '../../constants';

const SettingUp = () => (
  <Section bgColor={styles.darkLight} color="#fff" padding="120px 0">
    <Content direction="row" style="align-items: center;">
      <Col>
        <img className="left-img" src="/static/setup-tmp.png" />
      </Col>
      <Col>
        <H2 margin="0 0 15px">Setting Up Easily</H2>
        <P margin="0 0 30px 0">
          To join Poseidon Network is easy. Get reward immediately in less than
          5 minutes.
        </P>
        <Button
          title="Get the Demo App"
          uri="https://www.surveycake.com/s/W8GAD"
        />
      </Col>
      <style jsx>{`
        .col {
          flex: 1;
        }

        .left-img {
          margin-right: 30px;
        }

        @media only screen and (max-width: 768px) {
          .left-img {
            margin-bottom: 60px;
            margin-right: 0;
          }
        }

        @media only screen and (max-width: 554px) {
          .left-img {
            margin-bottom: 60px;
            width: 100%;
          }
        }
      `}</style>
    </Content>
  </Section>
);

export default SettingUp;
