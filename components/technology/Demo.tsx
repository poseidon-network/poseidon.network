import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Button from '../Button';
import { styles } from '../../constants';
import { withNamespaces } from '../../i18n';

const Demo = ({ t }: ITrans) => {
  return (
    <Section bgColor={styles.dark} color={styles.primaryColor} padding="120px">
      <Content>
        <H2 center>{t('tech.demo')}</H2>
        <P margin="0 0 30px;" mStyle="text-align: left;">
          {t('tech.demo.description')}
        </P>
        <Button margin="0 auto;" width="40%;" title="See Demo" uri="/demo" />
      </Content>
    </Section>
  );
};

export default withNamespaces('technology')(Demo);
