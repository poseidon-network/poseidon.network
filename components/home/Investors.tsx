import Section from '../Section';
import H2 from '../H2';
import Person from './Person';
import Content from '../Content';

import { styles } from '../../constants';
import { partners } from '../../data';
import { withNamespaces } from '../../i18n';

const Investors = ({ t }: ITrans) => (
  <Section padding="110px 0 120px" bgColor={styles.dark} color="#fff">
    <Content>
      <H2 id="partners" margin="0 0 60px" size="32px" center>
        {t('home.investors')}
      </H2>
      <div className="partners">
        {partners.map(({ name, title, avatar }) => (
          <Person
            key={name}
            name={t(name)}
            title={t(title)}
            avatar={avatar}
            backgroundColor="#000"
          />
        ))}
      </div>

      <style jsx>{`
        .partners {
          width: 100%;
          display: grid;
          grid-template-columns: auto auto auto auto;
          grid-gap: 0 30px;
          justify-content: space-around;
        }

        @media only screen and (max-width: 1024px) {
          .partners {
            grid-template-columns: auto auto;
            grid-gap: 60px 0;
          }
        }

        @media only screen and (max-width: 554px) {
          .partners {
            grid-template-columns: auto auto;
            grid-gap: 10px 34px;
          }
        }
      `}</style>
    </Content>
  </Section>
);

export default withNamespaces('home')(Investors);
