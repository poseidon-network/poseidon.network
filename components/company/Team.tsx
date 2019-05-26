import Section from '../Section';
import H2 from '../H2';
import Content from '../Content';
import { styles } from '../../constants';
import { team } from '../../data';
import Person from '../home/Person';

const Team = () => (
  <Section bgColor={styles.darkLight} color="#222633">
    <Content padding="0 0 120px">
      <H2 center id="team" margin="120px 0 100px" size="32px">
        Meat The Team
      </H2>
      <div className="members">
        {team.map(({ name, title, avatar }) => (
          <Person key={name} name={name} title={title} avatar={avatar} />
        ))}
      </div>
      <style jsx>{`
        .members {
          width: 100%;
          display: grid;
          grid-template-columns: auto auto auto auto;
          grid-gap: 60px 0;
          justify-content: space-around;
        }

        @media only screen and (max-width: 1024px) {
          .members {
            grid-template-columns: auto auto;
          }
        }

        @media only screen and (max-width: 554px) {
          .members {
            grid-template-columns: auto auto;
            grid-gap: 10px 34px;
          }
        }
      `}</style>
    </Content>
  </Section>
);

export default Team;
