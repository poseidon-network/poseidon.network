interface IProps {
  children: React.ReactNode;
  bgColor: string;
  color: string;
  padding?: string;
}

const Layout = ({ children, bgColor, color, padding }: IProps) => ((
  <div className="container">
    { children }
    <style jsx>{`
      .container {
        background-color: ${ bgColor };
        color: ${ color };
        width: 100%;
        overflow: hidden;
        padding: ${ padding || '32px'};
      }
    `}</style>
  </div>
));

export default Layout;
