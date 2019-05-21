import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Button from '../Button';
import { styles } from '../../constants';

const Demo = () => {
  return (
    <Section bgColor={styles.dark} color={styles.primaryColor} padding="120px">
      <Content>
        <H2 center>Demo</H2>
        <P margin="0 0 30px;" mStyle="text-align: left;">
          Next-Generation Content Layer (CDN + DSN), incentivized by TRX.
          Utilized unused bandwidth and storage from NAS, desktop, and mobile
          devices around the world. It’s distributed, efficient, and integrates
          perfectly with existing internet and blockchain infrastructure.
        </P>
        <Button margin="0 auto;" width="40%;" title="Coming Soon" uri="#" />
      </Content>
      <style jsx>{``}</style>
    </Section>
  );
};

export default Demo;
