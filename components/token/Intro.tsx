import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import { styles } from '../../constants';

const Intro = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="254px 0 114px"
    >
      <Content>
        <H2>Communicate Between Machines via Digital Token</H2>
        <P>Focus is on face, body and breast cosmetic surgery. On the other hand, cosmetic surgery restores normal structures of the body and to improve appearance and self-esteem. Leipziger is a Board certified plastic surgeon with special expertise in cosmetic and reconstructive surgery of the face, breast and body. Addiction to cosmetic surgery Some people appear to become addicted to cosmetic surgery, possibly because of body dysmorphic disorder. </P>
      </Content>
      <style jsx>{`
      `}</style>
    </Section>
  );
};

export default Intro;
