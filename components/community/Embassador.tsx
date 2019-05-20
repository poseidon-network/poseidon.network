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
        <Col style="margin-right: 69px;" mStyle="margin-right: 0;">
          <H3 center mStyle="text-align: left;" margin="0 0 15px">
            Great works are performed not by strength but by perseverance.
          </H3>
          <P mStyle="text-align: left;" margin="0">
            We provide a great amount of technical resources and opportunity to
            join in Poseidon Network. eg, Scholarship appllication, College
            Groups, Campus ambassador,......
          </P>
        </Col>
        <Col>
          <ul>
            <li>
              <H3>Education related</H3>
            </li>
            <li>
              <H3>Social Media related</H3>
            </li>
            <li>
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
          <Button title="Apply to become an ambassador" uri="" width="45%" />
        </Col>
      </Content>
      <style jsx>{`
        ul {
          margin: 0;
        }

        li {
          margin-bottom: 20px;
        }
      `}</style>
    </Section>
  );
};

export default Embassador;
