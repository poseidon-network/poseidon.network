import Section from './Section';
import H4 from './H4';
import { footer } from '../data';
import P from './P';
import Content from './Content';
import FooterLinks from './FooterLinks';

const Footer = () => ((
  <Section padding="77px 0 100px" bgColor="#1d202b" color="#fff">
    <Content direction="row">
      <div className="company-info">
        <img className="logo" alt="logo" src="/static/Logo.png" />
        <H4>A scalable value transfer<br/>protocol for the digital economy.</H4>
        <P style="font-size: 13px;">
          Privacy Policy  | Cookie Preferences<br/>
          { footer.copyright }
        </P>
      </div>
      <FooterLinks title="Getting Started" links={[]} />
      <FooterLinks title="Company" links={[]} />
      <FooterLinks title="Resources" links={[]} />
      <FooterLinks title="Resources" links={[]} />
      <FooterLinks title="Community" links={[]} />
    </Content>

    <style jsx>{`
      .company-info {
        align-self: self-start;
        flex: 1;
      }
    `}</style>
  </Section>
));

export default Footer;
