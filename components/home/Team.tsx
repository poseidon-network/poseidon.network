import Section from '../Section';
import H2 from '../H2';
import Person from './Person';
import Content from '../Content';
import { styles } from '../../constants';
import { team } from '../../data';

const Team = () => ((
  <Section bgColor={styles.dark} color="#222633">
    <Content>
      <H2
        center
        id="team"
        margin="120px 0 100px"
        size="32px"
      >
        A Strong Team Determined On Things Happen
      </H2>
      <div className="members">
        { team.map(({ name, title, avatar }) => (
          <Person key={name} name={name} title={title} avatar={avatar} />
        ))}
        <Person name="Reno Duh" title="Chief Analyst" avatar="/static/avatar-reno@2x.png"  />
      </div>
      <style jsx>{`
        .members {
          width: 100%;
          display: grid;
          grid-template-columns: 160px 160px 160px 160px;
          justify-content: space-around;
        }

        @media only screen and (max-width: 768px) {
          .members {
            grid-template-columns: 160px 160px;
            grid-gap: 60px 0;
          }
        }

        @media only screen and (max-width: 554px) {
          .members {
            grid-template-columns: 141px 141px;
            grid-gap: 10px 34px;
          }
        }
      `}</style>
    </Content>
  </Section>
));

export default Team;
