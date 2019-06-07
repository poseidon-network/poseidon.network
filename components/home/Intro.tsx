// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import MoreLink from '../MoreLink';
import Col from '../Col';
import { styles } from '../../constants';
import { introLogoList } from '../../data';
import { withTranslation } from '../../i18n';

const Intro = ({ t }: ITrans) => (
  <Section bgColor={styles.darkLight} color="#fff" padding="149px 0 100px">
    <Content
      direction="row"
      style="display: grid; grid-template-columns: repeat(auto-fit, 165px); justify-content: space-between; margin-bottom: 120px;"
      mStyle="grid-template-columns: 30% 30% 30%; justify-items: center; grid-gap: 0 60px;"
      sStyle="grid-template-columns: 100%; grid-gap: 0 30px"
    >
      {introLogoList.map(({ uri }, index) => (
        <img className="logo" key={index.toString()} src={uri} />
      ))}
    </Content>
    <Content direction="row">
      <Col
        flex
        style="justify-content: center; align-items: center;"
        mStyle="margin-bottom: 60px;"
        sStyle="margin-bottom: 90px;"
      >
        <video
          poster="/static/img-map@3x.png"
          controls
          className="video"
          src="https://s3-ap-northeast-1.amazonaws.com/static.poseidon.network/poseidon.mp4"
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
          <P
            margin="0 0 30px 0"
            mStyle="text-align: left;"
            sStyle="text-align: left;"
          >
            {t('home.explain')}
          </P>
          <MoreLink title={t('home.explain.readmore')} uri="/technology" />
        </ScrollAnimation>
      </Col>
    </Content>

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

export default withTranslation('home')(Intro);
