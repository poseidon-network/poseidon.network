import SocialMedia from './SocialMedia';
import { socialMediaList } from '../../data';

const SocialMediaList = () => (
  <>
    {socialMediaList.map(({ title, link, imgUri, followerNum }) => (
      <SocialMedia
        img={imgUri}
        followerNum={followerNum}
        name={title}
        uri={link}
      />
    ))}
  </>
);

export default SocialMediaList;
