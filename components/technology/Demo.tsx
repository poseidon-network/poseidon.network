import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import { styles } from '../../constants';

const Demo = () => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="120px"
    >
      <Content>
        <H2>Demo</H2>
        <P>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money. Does it end? Not usually because we are never satisfied. How many times have we convinced ourselves that if only we had some more money, life would be so sweet? But then, after receiving a substantial raise, we realize that it wasn’t enough and that we need more?</P>
      </Content>
      <style jsx>{`
    `}</style>
    </Section>
  );
};

export default Demo;
