import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import P from '../P';
import RParallax from '../RParallax';
import { styles } from '../../constants';
import { withTranslation } from '../../i18n';

const UseCase = ({ t }: ITrans) => {
  return (
    <Section bgColor={styles.dark} color={styles.primaryColor} padding="120px">
      <RParallax percentage={0.5} speed={-13}>
        <Content>
          <H2 center margin="0 0 49px" mStyle="margin: 0 0 60px;">
            {t('token.usecase')}
          </H2>
          <img src="/static/img-use-case.svg" />
          <H3 center margin="0 0 30px;">
            {t('token.b2b')}
          </H3>
          <P center margin="0 0 30px;">
            {t('token.b2b.description')}
          </P>
          <H3 center margin="0 0 30px;">
            {t('token.c2b2b')}
          </H3>
          <P center>{t('token.c2b2b.description')}</P>
        </Content>
      </RParallax>
      <style jsx>{`
        img {
          margin-bottom: 65px;
          width: 100%;
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('token')(UseCase);
