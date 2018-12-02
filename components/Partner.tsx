const Partner = ({ alt, logoUri, link }: { alt: string, logoUri: string, link: string }) => ((
  <div>
    <a href={link} target="_blank">
      <img alt={alt} src={logoUri} />
    </a>
    <style jsx>{`
      div {
        height: 24px;
        flex: 50%;
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
      }

      img {
        height: 24px;
      }
  `}</style>
  </div>
));

export default Partner;
