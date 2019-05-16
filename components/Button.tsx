const Button = ({
  uri,
  title,
  width,
  margin,
}: {
  uri: string;
  title: string;
  width?: string;
  margin?: string;
}) => {
  return (
    <a href={uri}>
      {title}
      <style jsx>{`
        a {
          width: ${width ? width : '100%'};
          text-align: center;
          border-radius: 28px;
          border: solid 1px #90cfbe;
          padding: 17px 0 15px;
          text-decoration: none;
          display: flex;
          justify-content: center;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.3px;
          text-align: center;
          color: #90cfbe;
          ${margin ? `margin: ${margin};` : ''}
        }

        a:hover {
          opacity: 0.7;
        }
      `}</style>
    </a>
  );
};

export default Button;
