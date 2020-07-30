import Section from '../Section';
import H2 from '../H2';
import Person from '../home/Person';
import Content from '../Content';
import { withTranslation } from '../../i18n';
import { styles } from '../../constants';
import { advisors } from '../../data';

const Advisors = ({ t }: ITrans) => (
  <Section padding="110px 0 120px;" bgColor={styles.primaryColor} color="#fff">
    <Content>
      <H2
        id="advisors"
        color={styles.dark}
        margin="0 0 60px"
        size="32px"
        center
      >
        {t('company.advisors')}
      </H2>
      <div className="advisors">
        {advisors.map(({ name, title, avatar }) => (
          <Person
            key={name}
            name={name}
            title={t(title)}
            avatar={avatar}
            backgroundColor={styles.primaryColor}
            nameColor={styles.dark}
            titleColor={styles.dark}
          />
        ))}
      </div>

      <style jsx>{`
        .advisors {
          width: 100%;
          display: grid;
          grid-template-columns: auto auto auto auto;
          grid-gap: 60px 30px;
          justify-content: space-around;
        }

        @media only screen and (max-width: 1024px) {
          .advisors {
            grid-template-columns: auto auto;
            grid-gap: 60px 0;
          }
        }

        @media only screen and (max-width: 554px) {
          .advisors {
            grid-template-columns: auto auto;
          }
        }
      `}</style>
    </Content>
  </Section>
);

export default withTranslation('company')(Advisors);
