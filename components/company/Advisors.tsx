import Section from '../Section';
import H2 from '../H2';
import Person from '../home/Person';
import Content from '../Content';
import {
  advisors,
} from '../../data';
import { styles } from '../../constants';

const Tech = () => ((
  <Section padding="120px 0 120px" bgColor={styles.primaryColor} color={styles.dark}>
    <H2 margin="0 0 60px">
      Advisors
    </H2>
    <Content>
      <div className="members">
        { advisors.map(({ name, title }) => (
          <Person
            key={name}
            name={name}
            title={title}
            avatar={''}
            backgroundColor={styles.dark}
            titleColor={styles.dark}
            nameColor={styles.dark}
          />
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
