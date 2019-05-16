import Section from '../Section';
import H2 from '../H2';
import Person from '../home/Person';
import Content from '../Content';
import {
  team,
} from '../../data';
import { styles } from '../../constants';

const Team = () => ((
  <Section padding="63px 0 120px" bgColor={styles.darkLight} color={styles.primaryColor}>
    <H2 margin="0 0 93px">
      Meet The Team
    </H2>
    <Content>
      <div className="members">
        { team.map(({ name, title }) => (
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
