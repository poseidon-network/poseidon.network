interface IProps {
  children: React.ReactNode;
  backgroundImage?: string;
  direction?: string;
}

const Content = ({ children, backgroundImage, direction = 'column' }: IProps) => ((
  <div className="container">
    { children }
    <style jsx>{`
      .container {
        max-width: 1440px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: ${ direction };
        margin: 0 auto;
        padding: 0;
        ${backgroundImage ? `background-image: url(${backgroundImage});` : ''}
        background-size: cover;
        background-repeat: no-repeat;
      }
    `}</style>
  </div>
));

export default Content;
