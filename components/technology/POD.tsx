import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import P from '../P';
import Col from '../Col';
import { styles } from '../../constants';
import { withTranslation } from '../../i18n';

const POD = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px"
    >
      <H2 center margin="0 0 60px">
        {t('tech.pod')}
      </H2>
      <Content direction="row">
        <Col style="margin-right: 31px;" mStyle="margin-right: 0;">
          <img src="/static/img-proof-a@2x.png" />
          <H3 center margin="0 0 15px;">
            {t('tech.pod.a')}
          </H3>
          <P mStyle="text-align: left;">{t('tech.pod.a.description')}</P>
        </Col>
        <Col>
          <img src="/static/img-proof-b@2x.png" />
          <H3 center margin="0 0 15px;">
            {t('tech.pod.b')}
          </H3>
          <P mStyle="text-align: left;">{t('tech.pod.b.description')}</P>
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 100%;
          object-fit: contain;
          margin-bottom: 30px;
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('technology')(POD);
