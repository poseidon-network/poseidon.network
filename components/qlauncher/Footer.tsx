import Section from '../Section';
import P from '../P';
import Content from '../Content';
import { withTranslation } from '../../i18n';
import { styles } from '../../constants';

const Footer = ({ t }: ITrans) => (
  <Section padding="47px 0 70px" bgColor="#1d202b" color="#fff">
    <Content direction="row" style="align-items: center;">
      <div className="company-info">
        <img className="logo" alt="logo" src="/static/poseidonnetwork.svg" />
        <div className="links">
          <ul>
            <li className="item">
              <a target="_blank" href="/company">
                {t('footer.about')}
              </a>
            </li>
            <li className="item">
              <a target="_blank" href="/token">
                {t('footer.token')}
              </a>
            </li>
            <li className="item">
              <a target="_blank" href="https://poseidon.zendesk.com/hc/zh-tw">
                {t('footer.faq')}
              </a>
            </li>
            <li className="item">
              <a target="_blank" href="mailto:service@poseidon.network">
                {t('footer.contact')}
              </a>
            </li>
          </ul>
        </div>
        <P style="font-size: 13px;">{t('footer.copyright')}</P>
      </div>
    </Content>

    <style jsx>{`
      a {
        cursor: pointer;
        color: ${styles.primaryColor};
        transition: color 0.3s;
      }

      a:hover {
        color: ${styles.lightColor};
      }

      a.is-active {
        color: ${styles.lightColor};
        font-weight: bold;
      }

      .company-info {
        align-self: center;
      }

      .item a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .links {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .links > ul {
        display: flex;
        flex-direction: row;
        margin: 0;
        padding-left: 0;
      }

      .links li {
        margin-left: 24px;
        display: inline-block;
        align-items: center;
      }

      .links li:first-child {
        margin-left: 0;
      }

      .links a {
        font-size: 16px;
      }

      .logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 32px;
        height: 40px;
        max-width: 100%;
      }

      @media only screen {
        .company-info {
          width: 100%;
          text-align: center;
        }
      }

      @media only screen and (max-width: 554px) {
        .links {
          display: block;
        }

        .links > ul {
          display: block;
        }

        .links li {
          padding: 4px 0;
          margin-left: 0;
          display: block;
        }
      }
    `}</style>
  </Section>
);

export default withTranslation('qlauncher')(Footer);
