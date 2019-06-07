import Section from '../Section';
import Content from '../Content';
import P from '../P';
import Col from '../Col';
import H2 from '../H2';

import { styles } from '../../constants';
import { withNamespaces } from '../../i18n';

const Dapp1 = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="8px 0 116px"
    >
      <Content direction="row" mStyle="align-items: center;">
        <Col>
          <H2 style="line-height: 1.63; width: 154px;" mStyle="width:100%;">
            {t('tech.smartcontract')}
          </H2>
        </Col>
        <Col style="flex: 2;">
          <div className="feature">
            <img src="/static/icon-node.svg" />
            <P>{t('tech.smartcontract1')}</P>
          </div>
          <div className="feature">
            <img src="/static/icon-prediction.svg" />
            <P>{t('tech.smartcontract2')}</P>
          </div>
          <div className="feature">
            <img src="/static/icon-pricing.svg" />
            <P>{t('tech.smartcontract3')}</P>
          </div>
          <div className="feature">
            <img src="/static/icon-contrract.svg" />
            <P>{t('tech.smartcontract4')}</P>
          </div>
          <div className="feature">
            <img src="/static/icon-lockup.svg" />
            <P>{t('tech.smartcontract5')}</P>
          </div>
        </Col>
      </Content>
      <style jsx>{`
        .feature {
          display: flex;
          align-items: center;
        }

        img {
          margin-right: 26px;
        }
      `}</style>
    </Section>
  );
};

export default withNamespaces('technology')(Dapp1);
