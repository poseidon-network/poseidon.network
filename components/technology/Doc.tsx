import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import MoreLink from '../MoreLink';
import { styles } from '../../constants';

const Header = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="0 0 120px"
    >
      <Content>
        <H2>Documentation</H2>
        <P margin="0 0 49px">There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun. The truth is the universe is a constantly changing, moving, some would say “living” thing because you just never know what you are going to see on any given night of stargazing.</P>

        <Content direction="row" style="justify-content: space-between;">
          <div className="doc-block">
            <div className="doc-content whitepaper">
              <strong>Whitepaper</strong>
              <p>Whitepaper</p>
            </div>
            <MoreLink uri="" />
          </div>
          <div className="doc-block">
            <div className="doc-content sdk">
              <strong>SDK</strong>
              <p>SDK</p>
            </div>
            <MoreLink uri="" />
          </div>
          <div className="doc-block">
            <div className="doc-content github">
              <strong>Github</strong>
              <p>SDK</p>
            </div>
            <MoreLink uri="" />
          </div>
        </Content>
      </Content>
      <style jsx>{`
        .doc-block {
          display: flex;
          width: 360px;
          height: 390px;
          padding: 23px 46px;
          border: solid 1px #ffffff;
          align-items: flex-end;
        }

        .doc-content {
          flex-direction: column;
          justify-content: flex-end;
          display: flex;
          width: 360px;
          height: 358px;
          position: absolute;
          transform: translate(-33px, -28px);
          padding: 23px 32px;
        }

        .whitepaper {
          background-image: conic-gradient(#d7f2ee,#90cfbe,#d7f2ee);
        }

        .sdk {
          background-image: conic-gradient(#ffe180 75%, #ffffff 75%, #ffe180 75%);
        }

        .github {
          background-image: conic-gradient(#216c8a 25%, #d7f2ee 25%, #216c8a 25%);
        }

        strong {
          font-size: 24px;
          font-weight: 600;
          font-style: normal;
          font-stretch: normal;
          line-height: 1;
          letter-spacing: 0.5px;
          color: #1d202b;
        }

        p {
          font-size: 16px;
          font-weight: 600;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.5;
          letter-spacing: 0.3px;
          color: #1d202b;
        }
      `}</style>
    </Section>
  );
};

export default Header;
