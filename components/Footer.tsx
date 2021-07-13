import Section from './Section';
import H4 from './H4';
import P from './P';
import Content from './Content';
import FooterLinks from './FooterLinks';
import { withTranslation } from '../i18n';
import { footer } from '../data';

const Footer = ({ t }: ITrans) => (
  <Section padding="77px 0 100px" bgColor="#1d202b" color="#fff">
    <Content direction="row" sStyle="align-items: flex-start;">
      <div className="company-info">
        <img className="logo" alt="logo" src="/static/poseidon-network.svg" />
        <H4
          style="width: 280px;"
          mStyle="width: 100%; text-align: center;"
          sStyle="text-align: left;"
        >
          {t('footer.poseidon.description')}
        </H4>
        <P
          style="font-size: 13px;"
          mStyle="text-align: left;"
          sStyle="text-align: left;"
        >
          {footer.copyright}
        </P>
      </div>

      <div className="links">
        <FooterLinks
          title={t('footer.gettingstart.title')}
          links={footer.gettingStarted}
        />
        <FooterLinks title={t('footer.company.title')} links={footer.company} />
        <FooterLinks
          title={t('footer.resource.title')}
          links={footer.resources}
        />
        <FooterLinks
          title={t('footer.community.title')}
          links={footer.communities}
        />
      </div>
    </Content>

    <style jsx>{`
      .company-info {
        align-self: self-start;
        flex: 1;
      }

      .links {
        display: flex;
      }

      .logo {
        margin-bottom: 16px;
        width: 60px;
        height: 60px;
      }

      @media only screen and (max-width: 1024px) {
        .logo {
          margin-bottom: 31px;
        }

        .company-info {
          width: 100%;
        }
      }

      @media only screen and (max-width: 554px) {
        .links {
          display: block;
        }
      }
    `}</style>
  </Section>
);

export default withTranslation('footer')(Footer);
