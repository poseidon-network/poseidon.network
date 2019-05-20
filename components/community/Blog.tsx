import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import { styles } from '../../constants';
import P from '../P';
import H3 from '../H3';
import Button from '../Button';
import Col from '../Col';

const Blog = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px 0 120px"
    >
      <Content>
        <H2 margin="0 0 60px">Blogs</H2>
        <Content
          direction="row"
          style="display: grid; grid-template-columns: auto auto auto; grid-gap: 10px 30px;"
        >
          <Col flex style="align-items: center;">
            <img src="/static/key-vision.svg" />
            <H3 center margin="0 0 15px;">
              POSEIDON NETWORK and Paradise Plan Announce…
            </H3>
            <P>
              We provide a great amount of technical resources and opportunity
              to join in Poseidon Network. eg, Scholarship appllication, College
              Groups, Campus ambassador,......
            </P>
          </Col>
          <Col flex style="align-items: center;">
            <img src="/static/key-vision.svg" />
            <H3 center margin="0 0 15px;">
              重構商業模式的邊界探索者
            </H3>
            <P>
              We value our community qualitive and qauntitive both. As far as
              you are willing or interesting in Poseidon Network, and willing to
              share it to your groups or friends, we provide community bounty
              for these case.
            </P>
          </Col>
          <Col flex style="align-items: center;">
            <img src="/static/key-vision.svg" />
            <H3 center margin="0 0 15px;">
              How to issue/list the token on the Binance Chain?
            </H3>
            <P>
              No matter you are a youtuber, influencer, or a blogger, you can
              apply for bounty to share our technology and information to your
              audience.
            </P>
          </Col>
        </Content>
        <Col flex style="align-items: center;">
          <Button
            width="40%;"
            title="Explore more articals"
            uri=""
            margin="77px 0 0"
          />
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 360px;
          height: 268px;
          margin-bottom: 30px;
        }

        @media only screen and (max-width: 768px) {
          img {
            width: 100%;
          }
        }
      `}</style>
    </Section>
  );
};

export default Blog;
