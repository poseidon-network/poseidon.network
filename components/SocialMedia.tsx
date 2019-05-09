const SocialMedia = ({ imgUri, link, alt }: { imgUri: string; link: string; alt: string }) => ((
  <a href={link}>
    <img src={imgUri} alt={alt} />
    <style jsx>{`
      img {
        width: 24px;
        margin: 0 34px 0 0;
      }
    `}</style>
  </a>
));

export default SocialMedia;
