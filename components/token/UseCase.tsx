import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import P from '../P';
import { styles } from '../../constants';

const UseCase = () => {
  return (
    <Section bgColor={styles.dark} color={styles.primaryColor} padding="120px">
      <Content>
        <H2 center margin="0 0 49px" mStyle="margin: 0 0 60px;">
          Use Case
        </H2>
        <img src="/static/img-use-case.svg" />
        <H3 center margin="0 0 30px;">
          B2B
        </H3>
        <P center margin="0 0 30px;">
          Fields of media, entertainment and education, such as video live
          broadcasters, audio and video content industry, audio and video
          education websites, social media, forums, and update file download
          support. POSEIDON NETWORK collects the bandwidth, storage space mainly
          from NAS and Linux systems, and pays the small-to-medium sized
          enterprises (SMEs) who are willing to provide idle network resources,
          and provides network resources to the above-mentioned industries and
          gets profits.
        </P>
        <H3 center margin="0 0 30px;">
          C2B2B
        </H3>
        <P center>
          In addition to SMEs, we also allow the general public to join the
          POSEIDON NETWORK mining model to share idle resources through NAS,
          computers or mobile phones to gain profits.
        </P>
      </Content>
      <style jsx>{`
        img {
          margin-bottom: 65px;
          width: 100%;
        }
      `}</style>
    </Section>
  );
};

export default UseCase;
