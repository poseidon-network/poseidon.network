interface IProps {
  children: React.ReactNode;
  backgroundImage?: string;
  direction?: string;
  padding?: string;
  style?: string;
  mStyle?: string;
  sStyle?: string;
}

const Content = ({
  children,
  backgroundImage,
  direction = 'column',
  padding = '0',
  style = '',
  mStyle = '',
  sStyle = '',
}: IProps) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        max-width: 1440px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: ${direction};
        margin: 0 auto;
        padding: ${padding};
        ${backgroundImage ? `background-image: url(${backgroundImage});` : ''}
        background-size: cover;
        background-repeat: no-repeat;
        ${style}
      }

      @media only screen and (max-width: 1024px) {
        .container {
          flex-direction: column;
          ${mStyle}
        }
      }

      @media only screen and (max-width: 554px) {
        .container {
          flex-direction: column;
          align-items: center;
          ${sStyle}
        }
      }
    `}</style>
  </div>
);

export default Content;
