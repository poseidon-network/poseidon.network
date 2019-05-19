import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';

import { styles } from '../../constants';

const Intro = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="112px 0 120px"
    >
      <Content direction="row">
        <Col mStyle="margin-bottom: 100px;">
          <img src="/static/key-vision@2x.png" />
        </Col>
        <Col mStyle="margin-bottom: 100px;">
          <H2 margin="90px 0 10px">Help us build a better Internet</H2>
          <P>
            We provide decentralized CDN service, the decentralized version of
            GCP, AWS Cloud Service. With IoT such as NAS, we achieve fog
            computing, it's closer to users than the cloud, several times
            faster, cheaper, and effective use of idle resources. With our
            variety of flexible solutions, partners have included the world's
            leading NAS brands, e-commerce, content industries, well-known gamer
            community forums, live streaming and so on.
          </P>
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 556px;
          height: 499px;
          object-fit: contain;
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

export default Intro;
