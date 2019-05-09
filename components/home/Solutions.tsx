import Section from '../Section';
import Content from '../Content';
import { styles } from '../../constants';
import SolutionItem from './SolutionItem';
import H2 from '../H2';
import { features } from '../../data';

const Solutions = () => ((
  <Section padding="120px 0" bgColor="#232633" color={styles.primaryColor}>
    <H2 center margin="0 0 38px">Solutions</H2>
    <Content direction="row">
      <div className="items">
        { features.map(({ title, imageUri, description }) => (
          <SolutionItem key={title} title={title} imageUri={imageUri} description={description} />
        ))}
      </div>
      <style jsx>{`
        .items {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-around;
        }
      `}</style>
    </Content>
  </Section>
));

export default Solutions;
