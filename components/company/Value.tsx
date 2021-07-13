import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import P from '../P';
import { withTranslation } from '../../i18n';
import { styles } from '../../constants';

const Value = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="137px 0"
    >
      <H2 center margin="0 0 60px">
        {t('company.ourvalue')}
      </H2>
      <Content
        style="display: grid; grid-template-columns: auto auto auto; grid-gap: 0 31px;"
        mStyle="grid-template-columns: auto; grid-gap: 60px;"
      >
        <div className="value">
          <img className="vaule-img" src="/static/img-spirit.svg" />
          <H3 color={styles.lightColor} center>
            {t('company.ourvalue.spirit')}
          </H3>
          <P mStyle="max-width: 349px; text-align: left;">
            {t('company.ourvalue.spirit.description')}
          </P>
        </div>
        <div className="value">
          <img className="vaule-img" src="/static/img-sharing.svg" />
          <H3 color={styles.lightColor} center>
            {t('company.ourvalue.sharing')}
          </H3>
          <P mStyle="max-width: 349px; text-align: left;">
            {t('company.ourvalue.sharing.description')}
          </P>
        </div>
        <div className="value">
          <img className="vaule-img" src="/static/img-innaovation.svg" />
          <H3 color={styles.lightColor} center>
            {t('company.ourvalue.innovation')}
          </H3>
          <P mStyle="max-width: 349px; text-align: left;">
            {t('company.ourvalue.innovation.description')}
          </P>
        </div>
      </Content>
      <style jsx>{`
        .value {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .vaule-img {
          margin-bottom: 58px;
        }

        @media only screen and (max-width: 1024px) {
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('company')(Value);
