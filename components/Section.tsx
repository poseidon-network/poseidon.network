interface IProps {
  children: React.ReactNode;
  bgColor: string;
  color: string;
  padding?: string;
  backgroundImage?: string;
}

const Layout = ({ children, bgColor, color, padding, backgroundImage }: IProps) => ((
  <div className="container">
    { children }
    <style jsx>{`
      .container {
        background-color: ${ bgColor };
        color: ${ color };
        width: 100%;
        overflow: hidden;
        padding: ${ padding || '32px'};
        padding-left: 150px;
        padding-right: 150px;
        ${backgroundImage ? `background-image: url(${backgroundImage});` : ''}
        background-size: cover;
        background-repeat: no-repeat;
      }

      @media only screen and (max-width: 1120px) {
        .container {
          background-image: none;
        }
      }

      @media only screen and (max-width: 768px) {
        .container {
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 60px;
        }
      }
    `}</style>
  </div>
));

export default Layout;
