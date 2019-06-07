// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import { styles } from '../../constants';
import P from '../P';
import Col from '../Col';
import { withTranslation } from '../../i18n';
// import Button from '../Button';

const Miner = ({ t }: ITrans) => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="120px 0 120px"
    >
      <Content direction="row">
        <Col flex mStyle="align-items: center; margin-bottom: 60px;">
          <img src="/static/img-miner.svg" />
        </Col>
        <Col>
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <H2 margin="0 0 15px">{t('community.miner')}</H2>
            <P margin="0 0 60px" mStyle="text-align: left;">
              {t('community.miner.description')}
            </P>
            {/* <Button title="Mobile App Coming soon" uri="" margin="0 0 16px" />
            <Button title="Desktop App Coming soon" uri="" margin="0 0 16px" />
            <Button title="NAS Coming soon" uri="" /> */}
          </ScrollAnimation>
        </Col>
      </Content>
      <style jsx>{`
        img {
          max-width: 493px;
          width: 100%;
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('community')(Miner);
