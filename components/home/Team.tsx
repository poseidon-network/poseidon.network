import Section from './Section';
import H2 from './H2';
import Person from './Person';
import Content from './Content';
import {
  team,
} from '../data';

const Team = () => ((
  <Section bgColor="#222633" color="#222633">
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
          <Person key={name} name={name} title={title} avatar={''} />
        ))}
      </div>
      <style jsx>{`
        .members {
          width: 100%;
          display: grid;
          grid-template-columns: 25% 25% 25% 25%;
        }
      `}</style>
    </Content>
  </Section>
));

export default Team;
