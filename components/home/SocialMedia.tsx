// @ts-ignore
import SVG from 'react-inlinesvg';
import { styles } from '../../constants';

const SocialMedia = ({
  imgUri,
  link,
  alt,
}: {
  imgUri: string;
  link: string;
  alt: string;
}) => (
  <a href={link}>
    <SVG src={imgUri} className="icon-link">
      <img src={imgUri} alt={alt} />
    </SVG>
    <style jsx>{`
      img {
        width: 24px;
        margin: 0;
      }
    `}</style>
  </a>
);

export default SocialMedia;
