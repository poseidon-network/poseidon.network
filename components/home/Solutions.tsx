import Section from '../Section';
import Content from '../Content';
import { styles } from '../../constants';
import SolutionItem from './SolutionItem';
import H2 from '../H2';
import { solutions } from '../../data';

const Solutions = () => ((
  <Section padding="120px 0" bgColor={styles.dark} color={styles.primaryColor}>
    <H2 center margin="0 0 38px">Solutions</H2>
    <Content
      direction="row"
      style={`
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        justify-content: space-around;
      `}
      mStyle="grid-template-columns: 50% 50%"
      sStyle="grid-template-columns: 100%;"
    >
      { solutions.map(({ title, imageUri, description }) => (
        <SolutionItem key={title} title={title} imageUri={imageUri} description={description} />
      ))}
    </Content>
  </Section>
));

export default Solutions;
