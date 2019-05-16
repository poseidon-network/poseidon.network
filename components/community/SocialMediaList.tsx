import SocialMedia from './SocialMedia';

const SocialMediaList = () => (
  <div className="medias">
    <SocialMedia followerNum="19.4" name="Facebook" />
    <SocialMedia followerNum="8.2" name="Medium" />
    <SocialMedia followerNum="17.5" name="Twitter" />
    <SocialMedia followerNum="10.3" name="Telegram" />
    <style jsx>{`
      .medias {
        display: flex;
      }
    `}</style>
  </div>
);

export default SocialMediaList;
