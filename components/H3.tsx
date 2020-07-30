import { styles } from '../constants';

const H3 = ({
  children,
  center,
  margin,
  color = styles.lightColor,
  id = '',
  style = '',
  mStyle = '',
  sStyle = '',
}: ITextBaseProps) => (
  <h3 id={id}>
    {children}

    <style jsx>{`
      h3 {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.25;
        letter-spacing: 0.3px;
        color: ${color};
        ${margin ? `margin: ${margin};` : 'margin: 0;'}
        ${center ? 'text-align: center;' : ''}
        ${style}
      }

      @media only screen and (max-width: 1024px) {
        h3 {
          text-align: center;
          ${mStyle}
        }
      }

      @media only screen and (max-width: 554px) {
        h3 {
          text-align: center;
          ${sStyle}
        }
      }
    `}</style>
  </h3>
);

export default H3;
