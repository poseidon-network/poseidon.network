const MoreLink = ({
  title = 'Read More',
  uri,
}: {
  title?: string;
  uri: string;
}) => {
  return (
    <div>
      <a href={uri}>{title} →</a>
      <style jsx>{`
        a {
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.4px;
          color: #90cfbe;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default MoreLink;
