import Section from '../Section';
import H2 from '../H2';
import Person from './Person';
import Content from '../Content';

import { advisors } from '../../data';

const Partners = () => ((
  <Section padding="110px 0 120px" bgColor="#222633" color="#fff">
    <Content>
      <H2 id="partners" margin="0 0 60px" size="32px" center>Our Strong Partners</H2>
      <div>
        {
          advisors.map(({ name, title }) => ((
            <Person
              key={name}
              name={name}
              title={title}
              avatar={''}
              backgroundColor="#000"
            />
          )))
        }
      </div>

      <style jsx>{`
        div {
          width: 100%;
          display: grid;
          grid-template-columns: 25% 25% 25% 25%;
        }
      `}</style>
    </Content>
  </Section>
));

export default Partners;
