import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import { styles } from '../../constants';
import P from '../P';
import Col from '../Col';
import Button from '../Button';
import SocialMediaList from './SocialMediaList';

const Header = () => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="120px 0 120px"
    >
      <Content direction="row" sStyle="margin-bottom: 99px;">
        <Col
          style="align-items: center; display: none;"
          mStyle="display: flex;"
        >
          <img src="/static/img-community@2x.png" />
        </Col>
        <Col>
          <H2 margin="0 0 15px"> Dip in our community</H2>
          <P
            margin="0 0 60px"
            mStyle="text-align: left;"
            sStyle="text-align: left;"
          >
            Cooperate with the most elite software develop team and the biggest
            NAS manufacturer in the world.
          </P>
          <Button
            margin="0"
            title="Become an ambassador"
            uri="https://www.surveycake.com/s/w48yR"
          />
        </Col>
        <Col flex style="align-items: center;" mStyle="display: none;">
          <img src="/static/img-community@2x.png" />
        </Col>
      </Content>
      <Content
        direction="row"
        style="display: grid; grid-template-columns: auto auto auto auto;"
        mStyle="grid-template-columns: auto auto; grid-gap: 60px 32px; margin-top: 60px;"
        sStyle="grid-template-columns: auto auto; grid-gap: 30px 31px; margin-top: 60px;"
      >
        <SocialMediaList />
      </Content>
      <style jsx>{`
        img {
          width: 431px;
          height: 398px;
          object-fit: contain;
        }

        @media only screen and (max-width: 1024px) {
          img {
            width: 100%;
          }
        }
      `}</style>
    </Section>
  );
};

export default Header;
