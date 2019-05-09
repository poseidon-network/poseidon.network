import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import P from '../P';

import { styles } from '../../constants';

const Dapp2 = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px"
    >
      <H2 margin="0 0 60px" center>Poseidon Network Dapps</H2>
      <Content direction="row" style="justify-content: space-between;">
        <div className="block">
          <H3 color={styles.lightColor} margin="0 0 16px" center>QCDN</H3>
          <P center>Cellulite is fat that is caught between bands of connective tissue directly beneath the skin that creates a lumpy, bumpy orange peel appearance mostly on the hips, thighs and backsides of most women.</P>
        </div>
        <div className="block">
          <H3 color={styles.lightColor} margin="0 0 16px" center>QCDN</H3>
          <P center>Cellulite is fat that is caught between bands of connective tissue directly beneath the skin that creates a lumpy, bumpy orange peel appearance mostly on the hips, thighs and backsides of most women.</P>
        </div>
        <div className="block">
          <H3 color={styles.lightColor} margin="0 0 16px" center>QCDN</H3>
          <P center>Cellulite is fat that is caught between bands of connective tissue directly beneath the skin that creates a lumpy, bumpy orange peel appearance mostly on the hips, thighs and backsides of most women.</P>
        </div>
      </Content>
      <style jsx>{`
        .block {
          width: 360px;
          height: 480px;
          background-color: #1d202b;
          padding: 60px 30px 30px;
        }
    `}</style>
    </Section>
  );
};

export default Dapp2;
