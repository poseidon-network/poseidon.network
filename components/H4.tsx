import { styles } from '../constants';

const H4 = ({
  children,
  center,
  margin,
  color = styles.lightColor,
  id = '',
  style = '',
  mStyle = '',
  sStyle = '',
}: ITextBaseProps) => (
  <h4 id={id}>
    {children}

    <style jsx>{`
      h4 {
        font-family: Montserrat;
        font-size: 15px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 2;
        letter-spacing: 0.2px;
        color: ${color};
        ${margin ? `margin: ${margin};` : 'margin: 0;'}
        ${center ? 'text-align: center;' : ''}
        ${style};
      }

      @media only screen and (max-width: 1024px) {
        h4 {
          ${mStyle};
        }
      }

      @media only screen and (max-width: 554px) {
        h4 {
          ${sStyle};
        }
      }
    `}</style>
  </h4>
);

export default H4;
