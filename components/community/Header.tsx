import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import { styles } from '../../constants';
import P from '../P';
import Col from '../Col';
import Button from '../Button';
import SocialMediaList from './SocialMediaList';

const Header = () => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="120px 0 120px"
    >
      <Content direction="row">
        <Col>
          <H2 margin="0 0 15px">Join To Tthe Community</H2>
          <P margin="0 0 60px">Cooperate with the most elite software develop team and the biggest NAS manufacturer in the world.</P>
          <Button margin="0" title="Become an ambassador" uri="" />
        </Col>
        <Col />
      </Content>
      <Content direction="row" style="margin-top: 125px;">
        <SocialMediaList />
      </Content>
    </Section>
  );
};

export default Header;
