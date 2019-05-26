import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import { styles } from '../../constants';

const HelpCompany = () => (
  <Section bgColor={styles.dark} color="#fff" padding="0 0 120px">
    <Content>
      <H2 center style="margin-bottom: 100px;" sStyle="margin-bottom: 30px;">
        Help Company to Do Good Things
      </H2>
      <img className="companies" src="/static/companies@2x.png" />
      <style jsx>{`
        .companies {
          height: 316px;
          width: 900px;
          margin: auto;
          object-fit: contain;
        }

        @media only screen and (max-width: 1024px) {
          .companies {
            width: 707px;
            height: 248.2px;
          }
        }

        @media only screen and (max-width: 554px) {
          .companies {
            width: 100%;
          }
        }
      `}</style>
    </Content>
  </Section>
);

export default HelpCompany;
