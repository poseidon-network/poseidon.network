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
      style="justify-content: space-between;"
      mStyle="flex-direction: row;"
    >
      { solutions.map(({ title, imageUri, description }) => (
        <SolutionItem key={title} title={title} imageUri={imageUri} description={description} />
      ))}
    </Content>
  </Section>
));

export default Solutions;
