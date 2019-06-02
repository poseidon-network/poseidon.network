// @ts-ignore
import Parallax from 'react-rellax';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';
import Button from '../Button';
import { styles } from '../../constants';

const SettingUp = () => (
  <Section bgColor={styles.darkLight} color="#fff" padding="120px 0">
    <Parallax percentage={0.5} speed={-7}>
      <Content direction="row" style="align-items: center;">
        <Col
          flex
          style="flex-direction: row; padding-right: 93px;"
          mStyle="padding-right: 0; margin-bottom: 60px;"
        >
          <img className="screen1" src="/static/screen-1@2x.png" />
          <img className="screen2" src="/static/screen-2@2x.png" />
        </Col>
        <Col>
          <ScrollAnimation animateOnce animateIn="fadeInUp">
            <H2 margin="0 0 15px">Setting Up Easily</H2>
            <P margin="0 0 30px 0">
              To join Poseidon Network is easy. Get reward immediately in less
              than 5 minutes.
            </P>
            <Button
              title="Get the Demo App"
              uri="https://www.surveycake.com/s/W8GAD"
            />
          </ScrollAnimation>
        </Col>
        <style jsx>{`
          .col {
            flex: 1;
          }

          img {
            height: 500px;
          }

          .screen2 {
            margin-left: -45px;
          }

          @media only screen and (max-width: 1024px) {
          }

          @media only screen and (max-width: 554px) {
            img {
              height: 345px;
            }
          }
        `}</style>
      </Content>
    </Parallax>
  </Section>
);

export default SettingUp;
