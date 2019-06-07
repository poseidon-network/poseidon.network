import Section from '../Section';
import H2 from '../H2';
import Content from '../Content';
import { styles } from '../../constants';
import { techCoreTeam } from '../../data';
import Person from '../home/Person';
import { withNamespaces } from '../../i18n';

const TechCoreTeam = ({ t }: ITrans) => (
  <Section bgColor={styles.darkLight} color="#222633">
    <Content padding="0 0 120px">
      <H2 center id="team" margin="0 0 100px" size="32px">
        {t('company.techteam')}
      </H2>
      <div className="members">
        {techCoreTeam.map(({ name, title, avatar }) => (
          <Person key={name} name={name} title={t(title)} avatar={avatar} />
        ))}
      </div>
      <style jsx>{`
        .members {
          width: 100%;
          display: grid;
          grid-template-columns: auto auto auto auto;
          grid-gap: 0 30px;
          justify-content: space-around;
        }

        @media only screen and (max-width: 1024px) {
          .members {
            grid-template-columns: auto auto;
            grid-gap: 60px 0;
          }
        }

        @media only screen and (max-width: 554px) {
          .members {
            grid-template-columns: auto auto;
          }
        }
      `}</style>
    </Content>
  </Section>
);

export default withNamespaces('company')(TechCoreTeam);
