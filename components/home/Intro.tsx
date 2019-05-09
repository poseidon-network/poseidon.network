import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import MoreLink from '../MoreLink';
import { styles } from '../../constants';

const Intro = () => ((
  <Section bgColor={styles.dark} color="#fff" padding="122px 0 100px">
    <Content direction="row">
      <div className="col">
      </div>
      <div className="col">
        <H2 margin="0 0 15px">What is Poseidon Network</H2>
        <P margin="0 0 30px 0">We provide decentralized CDN service, the decentralized version of GCP, AWS Cloud Service. With IoT such as NAS, we achieve fog computing,  it's closer to users than the cloud, several times faster, cheaper, and effective use of idle resources. With our variety of flexible solutions, partners have included the world's leading NAS brands, e-commerce, content industries, well-known gamer community forums, live streaming and so on.</P>
        <MoreLink uri="" />
      </div>

      <style jsx>{`
        .col {
          flex: 1;
        }
      `}</style>
    </Content>
  </Section>
));

export default Intro;
