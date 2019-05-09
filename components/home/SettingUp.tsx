import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';
import { styles } from '../../constants';

const SettingUp = () => ((
  <Section bgColor={styles.dark} color="#fff" padding="120px 0">
    <Content direction="row">
      <Col />
      <Col>
        <H2 margin="0 0 15px">Setting Up Easily</H2>
        <P margin="0 0 30px 0">Setting Up Easily</P>
      </Col>
      <style jsx>{`
        .col {
          flex: 1;
        }
      `}</style>
    </Content>
  </Section>
));

export default SettingUp;
