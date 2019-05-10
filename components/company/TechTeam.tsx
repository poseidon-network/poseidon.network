import Section from '../Section';
import H2 from '../H2';
import Person from '../home/Person';
import Content from '../Content';
import {
  techCoreTeam,
} from '../../data';
import { styles } from '../../constants';

const Tech = () => ((
  <Section padding="0 0 120px" bgColor={styles.darkLight} color={styles.primaryColor}>
    <H2 margin="0 0 60px">
      Tech Core Team
    </H2>
    <Content>
      <div className="members">
        { techCoreTeam.map(({ name, title }) => (
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

export default Tech;
