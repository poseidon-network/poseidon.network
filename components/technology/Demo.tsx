// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Button from '../Button';
import { styles } from '../../constants';
import { withTranslation } from '../../i18n';

const Demo = ({ t }: ITrans) => {
  return (
    <Section bgColor={styles.dark} color={styles.primaryColor} padding="120px">
      <Content>
        <ScrollAnimation animateOnce animateIn="fadeInUp">
          <H2 center>{t('tech.demo')}</H2>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
          <P center margin="0 0 30px;">
            {t('tech.demo.description')}
          </P>
        </ScrollAnimation>
        <Button margin="0 auto;" width="40%;" title="See Demo" uri="/demo" />
      </Content>
    </Section>
  );
};

export default withTranslation('technology')(Demo);
