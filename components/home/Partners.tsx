import Section from '../Section';
import H2 from '../H2';
import Person from './Person';
import Content from '../Content';

import { styles } from '../../constants';
import { partners } from '../../data';

const Partners = () => ((
  <Section padding="110px 0 120px" bgColor={styles.dark} color="#fff">
    <Content>
      <H2 id="partners" margin="0 0 60px" size="32px" center>Our Strong Partners</H2>
      <div className="partners">
        {
          partners.map(({ name, title, avatar }) => ((
            <Person
              key={name}
              name={name}
              title={title}
              avatar={avatar}
              backgroundColor="#000"
            />
          )))
        }
      </div>

      <style jsx>{`
        .partners {
          width: 100%;
          display: grid;
          grid-template-columns: 160px 160px 160px 160px;
          justify-content: space-around;
        }

        @media only screen and (max-width: 768px) {
          .partners {
            grid-template-columns: 160px 160px;
            grid-gap: 60px 0;
          }
        }

        @media only screen and (max-width: 554px) {
          .partners {
            grid-template-columns: 141px 141px;
            grid-gap: 10px 34px;
          }
        }
      `}</style>
    </Content>
  </Section>
));

export default Partners;
