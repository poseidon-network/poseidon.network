import Section from './Section';
import H2 from './H2';
import Member from './Member';
import Content from './Content';
import {
  team,
  techCoreTeam,
  advisors,
} from '../data';

const Team = () => ((
  <Section bgColor="#222633" color="#222633">
    <Content>
      <H2 id="team" color="#fff" center>TEAM</H2>
        <div className="members">
          { team.map(({ name, title, avatar }) => (
            <Member key={name} name={name} title={title} avatar={avatar} />
          ))}
        </div>
      <H2 color="#fff" center>Tech Core Team</H2>
        <div className="members">
          { techCoreTeam.map(({ name, title, avatar }) => (
            <Member key={name} name={name} title={title} avatar={avatar} />
          ))}
        </div>
      <H2 color="#fff" center>Advisors</H2>
        <div className="members">
          { advisors.map(({ name, title, avatar }) => (
            <Member key={name} name={name} title={title} avatar={avatar} />
          ))}
        </div>

      <style jsx>{`
        .members {
          margin-bottom: 24px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          min-width: 317px;
        }

        @media only screen and (min-width: 600px) {
          .members {
            justify-content: start;
            width: 100%;
          }
        }
      `}</style>
    </Content>
  </Section>
));

export default Team;
