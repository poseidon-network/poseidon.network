import Section from '../Section';
import Content from '../Content';
import { styles } from '../../constants';
import SolutionItem from './SolutionItem';
import H2 from '../H2';
import { solutions } from '../../data';
import { withNamespaces } from '../../i18n';

const Solutions = ({ t }: ITrans) => (
  <Section padding="120px 0" bgColor={styles.dark} color={styles.primaryColor}>
    <H2 center margin="0 0 38px">
      {t('home.solutions')}
    </H2>
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
      {solutions.map(({ title, imageUri, description }) => (
        <SolutionItem
          key={title}
          title={t(title)}
          imageUri={imageUri}
          description={t(description)}
        />
      ))}
    </Content>
  </Section>
);

export default withNamespaces('home')(Solutions);
