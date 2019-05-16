import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import { styles } from '../../constants';

const HelpCompany = () => ((
  <Section bgColor={styles.dark} color="#fff" padding="0 0 100px">
    <Content>
      <H2 center style="margin-bottom: 100px;" sStyle="margin-bottom: 30px;">Help Company to Do Good Things</H2>
      <img className="companies" src="/static/companies@2x.png"/>
      <style jsx>{`
        .companies {
          height: 167px;
          max-width: 100%;
        }

        @media only screen and (max-width: 768px) {
          .companies {
            height: 100px;
          }
        }

        @media only screen and (max-width: 554px) {
          .companies {
            height: 49px;
          }
        }
      `}</style>
    </Content>
  </Section>
));

export default HelpCompany;
