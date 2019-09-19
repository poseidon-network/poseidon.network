interface IProps {
  children: React.ReactNode;
  bgColor?: string;
  color?: string;
  padding?: string;
  backgroundImage?: string;
  style?: string;
  mStyle?: string;
}

const Layout = ({
  children,
  bgColor,
  color,
  padding,
  backgroundImage,
  style = '',
  mStyle = '',
}: IProps) => (
  <div className="section">
    {children}
    <style jsx>{`
      .section {
        background-color: ${bgColor};
        color: ${color};
        width: 100%;
        overflow: hidden;
        padding: ${padding || '32px'};
        padding-left: 150px;
        padding-right: 150px;
        ${backgroundImage ? `background-image: url(${backgroundImage});` : ''}
        background-size: cover;
        background-repeat: no-repeat;
        ${style}
      }

      @media only screen and (max-width: 1120px) {
        .section {
          background-image: none;
        }
      }

      @media only screen and (max-width: 1024px) {
        .section {
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 60px;
          padding-bottom: 60px;
          ${mStyle}
        }
      }
    `}</style>
  </div>
);

export default Layout;
