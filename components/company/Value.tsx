import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import P from '../P';
import Col from '../Col';

import { styles } from '../../constants';

const Vaule = () => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="58px 0 114px"
    >
      <H2 margin="0 0 226px">Our Vaule</H2>
      <Content direction="row">
        <Col style="margin: 0 5px;">
          <H3>Spirit</H3>
          <P>Cellulite is fat that is caught between bands of connective tissue directly beneath the skin that creates a lumpy, bumpy orange peel appearance mostly on the hips, thighs and backsides of most women. </P>
        </Col>
        <Col style="margin: 0 5px;">
          <H3>Sharing</H3>
          <P>Cellulite is fat that is caught between bands of connective tissue directly beneath the skin that creates a lumpy, bumpy orange peel appearance mostly on the hips, thighs and backsides of most women. </P>
        </Col>
        <Col>
          <H3>Innovation</H3>
          <P>Cellulite is fat that is caught between bands of connective tissue directly beneath the skin that creates a lumpy, bumpy orange peel appearance mostly on the hips, thighs and backsides of most women. </P>
        </Col>
      </Content>
      <style jsx>{`
      `}</style>
    </Section>
  );
};

export default Vaule;
