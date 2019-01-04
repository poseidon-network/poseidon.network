interface IProps {
  children: React.ReactNode;
  direction?: string;
}

const Content = ({ children, direction = 'column' }: IProps) => ((
  <div className="container">
    { children }
    <style jsx>{`
      .container {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        max-width: 88%;
        flex-direction: ${ direction };
        margin: 0 auto;
        padding: 0;
      }
    `}</style>
  </div>
));

export default Content;
