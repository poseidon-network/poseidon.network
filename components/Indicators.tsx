import Layout from './Layout';
import Indicator from './Indicator';
import Content from './Content';
import { indicators } from '../data';

const Indicators = () => ((
  <Layout bgColor="#222633" color="#fff" padding="32px 32px 0">
    <Content direction="row">
      {
        indicators.map(({ value, unit, description }) =>(
          <Indicator value={value} unit={unit} description={description} />
        ))
      }
    </Content>
  </Layout>
));

export default Indicators;
