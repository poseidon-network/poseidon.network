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
        <P mStyle="text-align: left;" margin="0 0 90px">
          We’re proud to offer free services for open-source and nonprofit
          projects. Try our solution with our open-source spirit!
        </P>
        <Content direction="row" style="justify-content: space-between;">
          <div className="doc-block">
            <div className="doc-content whitepaper">
              <strong>Whitepaper</strong>
              <p>Whitepaper</p>
            </div>
            <MoreLink uri="http://ipfs.poseidon.network/ipfs/QmUzzcKXhturgVu8BgFhf7bmnf2ittC7d9T9bXwuX5NEXB" />
          </div>
          <div className="doc-block">
            <div className="doc-content sdk">
              <strong>SDK</strong>
              <p>SDK</p>
            </div>
            {/* <MoreLink uri="" /> */}
          </div>
          <div className="doc-block">
            <div className="doc-content github">
              <strong>Github</strong>
              <p>SDK</p>
            </div>
            {/* <MoreLink uri="" /> */}
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
          transform: translate(-33px, -38px);
          padding: 23px 32px;
        }

        .whitepaper {
          background-image: conic-gradient(
            #a1d7c8 0%,
            #8fcebd 25%,
            #d6f1ed 25%,
            #bce4db,
            #a9dace
          );
        }

        .sdk {
          background-image: conic-gradient(#fff, #ffe180 90%, #ffe180 85%);
        }

        .github {
          background-image: conic-gradient(
            #659eaf,
            #216c8a 50%,
            #d7f2ee 50%,
            #92bfc7 90%
          );
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

        @media only screen and (max-width: 1024px) {
          .doc-block {
            width: 100%;
            margin-bottom: 60px;
          }

          .doc-content {
            width: 92%;
          }
        }

        @media only screen and (max-width: 554px) {
          .doc-content {
            width: 83%;
          }
        }
      `}</style>
    </Section>
  );
};

export default Header;
