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
      <Content>
        <div className="first-row">
          <H2 center margin="0 0 18px">Become an Embassador</H2>
          <H3 center margin="0">Great works are performed not by strength but by perseverance.</H3>
        </div>
        <div className="second-row">
          <Col>
            <H3 center margin="0 0 24px">Education related</H3>
            <P margin="0">Cellulite is fat that is caught between bands of connective tissue directly beneath the skin that creates a lumpy, bumpy orange peel appearance mostly on the hips, thighs and backsides of most women.</P>
          </Col>
          <Col>
            <H3 center margin="0 0 24px">Social Media related</H3>
            <P margin="0">Cellulite is fat that is caught between bands of connective tissue directly beneath the skin that creates a lumpy, bumpy orange peel appearance mostly on the hips, thighs and backsides of most women.</P>
          </Col>
          <Col>
            <H3 center margin="0 0 24px">Media related</H3>
            <P margin="0">Cellulite is fat that is caught between bands of connective tissue directly beneath the skin that creates a lumpy, bumpy orange peel appearance mostly on the hips, thighs and backsides of most women.</P>
          </Col>
        </div>
        <div className="third-row">
          <H2 center margin="0 0 30px">Any Interested</H2>
          <Button title="Apply to become an ambassador" uri="" width="555px" />
        </div>
      </Content>
      <style jsx>{`
        .first-row {
          margin-bottom: 160px;
        }

        .second-row {
          display: flex;
          margin-bottom: 121px;
        }

        .third-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
      `}</style>
    </Section>
  );
};

export default Embassador;
