import SocialMedia from './SocialMedia';

const SocialMediaList = () => (
  <>
    <SocialMedia
      img="/static/facebook.svg"
      followerNum="19.4"
      name="Facebook"
    />
    <SocialMedia img="/static/medium.svg" followerNum="8.2" name="Medium" />
    <SocialMedia img="/static/twitter.svg" followerNum="17.5" name="Twitter" />
    <SocialMedia
      img="/static/telegram.svg"
      followerNum="10.3"
      name="Telegram"
    />
  </>
);

export default SocialMediaList;
