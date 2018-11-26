const Partner = ({ alt, logoUri }: { alt: string, logoUri: string }) => ((
  <div>
    <img alt={alt} src={logoUri} />
    <style jsx>{`
      div {
        height: 24px;
        flex: 50%;
        display: flex;
        justify-content: center;
        margin-bottom: 27px;
      }

      img {
        height: 24px;
      }
  `}</style>
  </div>
));

export default Partner;
