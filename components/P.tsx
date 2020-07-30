import { styles } from '../constants';

const P = ({
  children,
  center,
  margin,
  style = '',
  sStyle = '',
  mStyle = '',
  color = styles.lightColor,
  id = '',
}: ITextBaseProps) => (
  <p id={id}>
    {children}
    <style jsx>{`
      p {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.88;
        letter-spacing: 0.3px;
        color: ${color};
        white-space: pre-line;
        ${margin ? `margin: ${margin};` : ''}
        ${center ? 'text-align: center;' : ''}
        ${style}
      }

      @media only screen and (max-width: 1024px) {
        p {
          text-align: center;
          ${mStyle}
        }
      }

      @media only screen and (max-width: 554px) {
        p {
          text-align: center;
          ${sStyle}
        }
      }
    `}</style>
  </p>
);

export default P;
