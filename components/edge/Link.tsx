// @ts-ignore
import React, { FC, useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import QRCode from 'qrcode';

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
  const [qrcode, setQRCode] = useState<string>();

  const generateQRCode = async () => {
    const data = `NAS-QNAP-${sn}`;
    setQRCode(
      await QRCode.toDataURL(data, {
        errorCorrectionLevel: 'H',
        scale: 12,
        margin: 0,
      }),
    );
  };
  generateQRCode();

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
          <H1 margin="0 0 10px" sStyle="text-align: left; margin-top: 2.5rem;">
            2
          </H1>
          <H2 margin="0 0 10px" sStyle="text-align: left;">
            {t('link.title')}
          </H2>
          <P sStyle="text-align: left;">{t('link.description')}</P>
          <div className="qrcode">
            <div className="qrcode-wrapper">
              <img className="qrcode-img" src={qrcode} />
              <p className="qrcode-text">
                <img className="icon" src="/static/ic-scan.svg" />
                Scan Me
              </p>
            </div>
          </div>
        </Col>
        <Col style="margin: 0 80px;" mStyle="margin: 0 auto;">
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

        .qrcode-img {
          width: 100%;
          min-width: initial;
          background-color: white;
          padding: 12px;
          margin: auto;
          display: block;
        }

        .icon {
          width: initial;
          background-color: transparent;
          padding: 0;
          margin: 0 4px 0;
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
            min-width: 220px;
            height: 30vh;
            display: block;
            margin: auto;
            margin-top: 3rem;
          }

          .qrcode-wrapper {
            width: 80%;
            max-width: 250px;
          }

          .qrcode {
            display: flex;
            justify-content: center;
            margin-top: 2.5rem;
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
