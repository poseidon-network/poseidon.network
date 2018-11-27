import Layout from './Layout';
import H2 from './H2';
import Member from './Member';
import Content from './Content';
import {
  team,
  techCoreTeam,
  advisors,
} from '../data';

const Team = () => ((
  <Layout bgColor="#90cfbe" color="#222633">
    <Content>
      <H2 id="team" color="#222633" center>TEAM</H2>
        <div className="members">
          { team.map(({ name, title, avatar }) => (
            <Member key={name} name={name} title={title} avatar={avatar} />
          ))}
        </div>
      <H2 color="#222633" center>Tech Core Team</H2>
        <div className="members">
          { techCoreTeam.map(({ name, title, avatar }) => (
            <Member key={name} name={name} title={title} avatar={avatar} />
          ))}
        </div>
      <H2 color="#222633" center>Advisors</H2>
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
  </Layout>
));

export default Team;
