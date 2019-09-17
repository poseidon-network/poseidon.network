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
      padding="110px 0"
    >
      <Content direction="row">
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
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=QN-TEST:${sn}`}
              />
            </div>
          </ScrollAnimation>
        </Col>
        <Col style="margin: 0 80px;" mStyle="margin: 0;">
          <img src="/static/qedge-img-2@2x.png" />
        </Col>
      </Content>
      <style jsx>{`
        img {
          width: 100%;
          max-wdith: 500px;
          min-width: 300px;
          object-fit: contain;
        }

        .qrcode {
          width: 100%;
        }

        .qrcode img {
          height: 250px;
          width: 250px;
          min-width: initial;
          background-color: white;
          padding: 12px;
          margin: 0;
        }

        @media only screen and (max-width: 1024px) {
          img {
            width: 100%;
            margin-bottom: 160px;
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
