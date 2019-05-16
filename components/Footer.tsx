import i18next from 'i18next';
import Section from './Section';
import H4 from './H4';
import P from './P';
import Content from './Content';
import FooterLinks from './FooterLinks';
import { withNamespaces } from '../i18n';
import { footer, communities } from '../data';

const Footer = ({ t }: { t: i18next.TFunction }) => ((
  <Section  padding="77px 0 100px" bgColor="#1d202b" color="#fff">
    <Content
      direction="row"
      sStyle="align-items: flex-start;"
    >
      <div className="company-info">
        <img className="logo" alt="logo" src="/static/Logo.png" />
        <H4
          style="width: 261px;"
          mStyle="width: 100%;"
        >A scalable value transfer protocol for the digital economy.</H4>
        <P style="font-size: 13px;" mStyle="text-align: left;" sStyle="text-align: left;">
          {t('privacy-policy')} | {t('cookie-preferences')}<br/>
          { footer.copyright }
        </P>
      </div>
      {/* <FooterLinks title="Getting Started" links={[]} />
      <FooterLinks title="Company" links={[]} />
      <FooterLinks title="Resources" links={[]} />
      <FooterLinks title="Resources" links={[]} /> */}
      <FooterLinks title="Community" links={communities} />
    </Content>

    <style jsx>{`
      .company-info {
        align-self: self-start;
        flex: 1;
      }

      @media only screen and (max-width: 768px) {
        .logo {
          margin-bottom: 31px;
        }
      }
    `}</style>
  </Section>
));

export default withNamespaces('footer')(Footer);
