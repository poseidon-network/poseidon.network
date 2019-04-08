import Section from './Section';
import Indicator from './Indicator';
import Content from './Content';
import { indicators } from '../data';

const Indicators = () => ((
  <Section bgColor="#222633" color="#fff" padding="12px 32px 0">
    <Content direction="row">
      {
        indicators.map(({ value, unit, description }) => (
          <Indicator key={value} value={value} unit={unit} description={description} />
        ))
      }
    </Content>
  </Section>
));

export default Indicators;
