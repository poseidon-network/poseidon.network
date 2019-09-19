// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H1 from '../H1';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';

import { withTranslation } from '../../i18n';
import { styles } from '../../constants';

interface IProps {
  sn: string;
}

const Link = ({ sn, t }: IProps & ITrans) => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="10vh 0"
      mStyle="padding-top: 30px; padding-bottom: 30px;"
    >
      <Content
        direction="row"
        mStyle="flex-direction: column-reverse;"
        sStyle="flex-direction: column-reverse;"
      >
        <Col>
          <H1 margin="0 0 10px">2</H1>
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <H2 margin="0 0 10px">{t('link.title')}</H2>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
            <P>{t('link.description')}</P>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInUp" delay={800}>
            <div className="qrcode">
              <div className="qrcode-wrapper">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=QN-TEST:${sn}`}
                />
                <p className="qrcode-text">Scan Me</p>
              </div>
            </div>
          </ScrollAnimation>
        </Col>
        <Col style="margin: 0 80px;">
          <img className="instruction-img" src="/static/qedge-img-2@2x.png" />
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 100%;
          max-width: 500px;
          object-fit: contain;
        }

        .qrcode {
          width: 100%;
        }

        .qrcode-wrapper {
          width: 250px;
          padding: 20px 20px 0;
          background-color: #90cfbe;
        }

        .qrcode img {
          width: 100%;
          min-width: initial;
          background-color: white;
          padding: 12px;
          margin: auto;
          display: block;
        }

        .qrcode-text {
          margin: 0;
          padding: 8px 0;
          color: #1d202b;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
        }

        @media only screen and (max-width: 1024px) {
          img {
            width: 100%;
            margin-bottom: 20px;
          }

          .instruction-img {
            height: 30vh;
            display: block;
            margin: auto;
          }

          .qrcode-wrapper {
            width: 80%;
            max-width: 250px;
          }

          .qrcode {
            display: flex;
            justify-content: center;
          }
        }

        @media only screen and (max-width: 554px) {
          img {
            width: 100%;
          }
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('edge')(Link);
