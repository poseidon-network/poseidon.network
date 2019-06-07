import SocialMedia from './SocialMedia';
import { socialMediaList } from '../../data';
import { withTranslation } from '../../i18n';

const SocialMediaList = () => (
  <>
    {socialMediaList.map(({ title, link, imgUri, followerNum }) => (
      <SocialMedia
        key={title}
        img={imgUri}
        followerNum={followerNum}
        name={title}
        uri={link}
      />
    ))}
  </>
);

export default withTranslation('community')(SocialMediaList);
