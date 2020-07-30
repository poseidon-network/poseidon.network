// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import MoreLink from '../MoreLink';
import Col from '../Col';
import RParallax from '../RParallax';
import { styles } from '../../constants';
// import { introLogoList } from '../../data';
import { withTranslation, i18n } from '../../i18n';

const Intro = ({ t }: ITrans) => {
  const videoURI = ['zh-TW', 'zh-CN'].includes(i18n.language)
    ? 'https://www.youtube.com/embed/R2ehmHkq4RI'
    : 'https://www.youtube.com/embed/Kdj5ZoSJqv0';
  return (
    <Section bgColor={styles.darkLight} color="#fff" padding="120px 0 120px">
      <RParallax percentage={0.5} speed={-13}>
        {/* <Content
          direction="row"
          style="display: grid; grid-template-columns: repeat(auto-fit, 165px); justify-content: space-between; margin-bottom: 120px;"
          mStyle="grid-template-columns: 30% 30% 30%; justify-items: center; grid-gap: 0 60px;"
          sStyle="grid-template-columns: 100%; grid-gap: 0 30px"
        >
          {introLogoList.map(({ img, uri }, index) => (
            <a key={uri} className="partner" href={uri} target="_blank">
              <img className="logo" key={index.toString()} src={img} />
            </a>
          ))}
        </Content> */}
        <Content direction="row">
          <Col
            flex
            style="justify-content: center; align-items: center;"
            mStyle="margin-bottom: 60px;"
            sStyle="margin-bottom: 90px;"
          >
            <iframe
              style={{ width: '100%', height: '100%' }}
              src={videoURI}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Col>
          <Col style="padding: 0 32px;">
            <ScrollAnimation animateOnce animateIn="fadeInUp">
              <H2
                margin="0 0 15px"
                mStyle="text-align: left;"
                sStyle="text-align: left;"
              >
                {t('home.whatposeidon')}
              </H2>
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="fadeInUp" delay={400}>
              <P
                margin="0 0 30px 0"
                mStyle="text-align: left;"
                sStyle="text-align: left;"
              >
                {t('home.explain')}
              </P>
            </ScrollAnimation>
            <MoreLink title={t('home.explain.readmore')} uri="/technology" />
          </Col>
        </Content>
      </RParallax>
      <style jsx>{`
        .logo {
          height: 51px;
        }

        .left-img {
          margin-right: 32px;
          width: 100%;
        }

        video {
          width: 95%;
          min-width: 300px;
        }

        .partner {
          transition: transform 0.3s linear;
        }

        .partner:hover {
          transform: scale(0.95, 0.95);
        }

        @media only screen and (max-width: 1024px) {
        }

        @media only screen and (max-width: 554px) {
          .logo {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('home')(Intro);
