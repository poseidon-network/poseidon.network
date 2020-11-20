import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import P from '../P';
import Col from '../Col';
import Button from '../Button';
import { styles } from '../../constants';
import { withTranslation } from '../../i18n';

const GetToken = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px"
    >
      <Content direction="row">
        <Col
          flex
          style="margin-right: 30px;"
          mStyle="margin-right: 0; margin-bottom: 60px; align-items: center;"
        >
          <img src="/static/img-community-bounty@2x.png" />
        </Col>
        <Col>
          <H2 margin="0 0 60px">{t('token.getqqq')}</H2>
          <H3 margin="0 0 15px">{t('token.getqqq.exchanges')}</H3>
          <P margin="0 0 20px">{t('token.getqqq.exchanges.description')}</P>
          <Button
            margin="0 0 30px;"
            style="padding: 10px 20px 8px;"
            title={
              <img
                style={{ width: 'auto', height: 34 }}
                src="/static/logo-ace.png"
              />
            }
            uri="https://www.ace.io/webtrade/TWD_QQQ"
          />
          <Button
            margin="0 0 30px;"
            title={
              <img
                style={{ width: 115, height: 20 }}
                src="/static/logo-bitforex@2x.png"
              />
            }
            uri="https://www.bitforex.com/en/spot/qqq_usdt"
          />
          <Button
            margin="0 0 60px;"
            style="padding: 10px 20px 8px;"
            title={
              <img
                style={{ width: 108, height: 34 }}
                src="/static/logo-hotbit.png"
              />
            }
            uri="https://www.hotbit.io/exchange?symbol=QQQ_USDT"
          />
          <H3 margin="0 0 15px">{t('token.getqqq.community')}</H3>
          <P margin="0 0 60px">{t('token.getqqq.community.description')}</P>

          <Button title={t('token.getqqq.community.link')} uri="/community" />
        </Col>
      </Content>
      <style jsx>{`
        img {
          max-width: 541px;
          width: 100%;
          margin-right: 35px;
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('token')(GetToken);
