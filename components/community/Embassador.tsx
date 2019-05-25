import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import { styles } from '../../constants';
import P from '../P';
import Col from '../Col';
import Button from '../Button';

const Embassador = () => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="120px 0 120px"
    >
      <H2 center margin="0 0 60px">
        Become an Embassador
      </H2>
      <Content direction="row" mStyle="flex-direction: row;">
        <Col
          style="margin-right: 69px;"
          mStyle="margin-right: 0;"
          sStyle="margin-bottom: 60px;"
        >
          <H3 mStyle="text-align: left;" margin="0 0 15px">
            Great works are performed not by strength but by perseverance.
          </H3>
          <P
            margin="0"
            mStyle="text-align: left;"
            sStyle="margin-bottom: 10px; text-align: left;"
          >
            We provide a great amount of technical resources and opportunity to
            join in Poseidon Network. eg, Scholarship appllication, College
            Groups, Campus ambassador. We value our community qualitive and
            qauntitive both. As far as you are willing or interesting in
            Poseidon Network, and willing to share it to your groups or friends,
            we provide community bounty for these case.
          </P>
        </Col>
        <Col style="width: 100%;">
          <ul>
            <li>
              <img className="check" src="/static/check.svg" />
              <H3>Education related</H3>
            </li>
            <li>
              <img className="check" src="/static/check.svg" />
              <H3>Social Media related</H3>
            </li>
            <li>
              <img className="check" src="/static/check.svg" />
              <H3>Media related</H3>
            </li>
          </ul>
        </Col>
      </Content>
      <Content style="margin-top: 60px;">
        <H2 center margin="0 0 30px">
          Any Interested
        </H2>
        <Col flex style="align-items: center;">
          <Button
            title="Apply to become an ambassador"
            uri="https://www.surveycake.com/s/w48yR"
            width="45%"
            mStyle="width: 90%;"
            sStyle="width: 100%; padding: 18px 12px;"
          />
        </Col>
      </Content>
      <style jsx>{`
        ul {
          margin: 0;
          padding: 0;
        }

        li {
          margin-bottom: 20px;
          list-style-type: none;
          display: flex;
          align-items: center;
        }

        .check {
          margin-right: 30px;
        }
      `}</style>
    </Section>
  );
};

export default Embassador;
