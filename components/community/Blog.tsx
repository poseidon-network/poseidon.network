import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import { styles } from '../../constants';
import P from '../P';
import Col from '../Col';
import Button from '../Button';

const Blog = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px 0 120px"
    >
      <Content direction="row">
        <Col />
        <Col>
          <H2 margin="0 0 15px">Blogs</H2>
          <P margin="0 0 60px">Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money. Does it end? Not usually because we are never satisfied. How many times have we convinced ourselves that if only we had some more money, life would be so sweet? But then, after receiving a substantial raise, we realize that it wasn’t enough and that we need more?</P>
          <Button title="Apply for Contribution" uri="" margin="0" />
        </Col>
      </Content>
      <style jsx>{`
      `}</style>
    </Section>
  );
};

export default Blog;
