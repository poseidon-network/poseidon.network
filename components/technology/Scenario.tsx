import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';

import { styles } from '../../constants';

const Scenario = () => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="120px 0"
    >
      <Content direction="row">
        <Col>
          <H2 margin="0 0 10px">Poseidon Network Dapps<br/>Scenario</H2>
          <P>I grew up in New England, the home of ‘plain cooking’, where corn on the cob is served as is with a slab of butter and a sprinkle of salt and pepper. We boil salted meats with vegetables and call it – well, a boiled dinner. Our clam chowder is white, our baked beans have bacon and molasses in them, and no one in the world has ever invented a food that was improved by the addition of curry. By the time I was eighteen, I could boil a lobster, steam clams and grill a pork chop to perfection. Then I moved to Virginia, picked up a roommate from North Carolina – and discovered a whole new world of down home country cooking goodness.</P>
        </Col>
        <Col />
      </Content>
      <style jsx>{`
      `}</style>
    </Section>
  );
};

export default Scenario;
