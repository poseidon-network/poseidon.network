const Button = ({ uri, title, width, margin }: {
  uri: string;
  title: string;
  width?: string;
  margin?: string;
}) => {
  return (
    <a href={uri}>
      { title }
      <style jsx>{`
        a {
          width: ${ width ? width : '100%' };
          text-align: center;
          border-radius: 28px;
          border: solid 1px #d7f2ee;
          padding: 17px 0 15px;
          text-decoration: none;
          display: flex;
          justify-content: center;
          ${ margin ? `margin: ${margin};` : '' }
        }
      `}</style>
    </a>
  );
};

export default Button;
