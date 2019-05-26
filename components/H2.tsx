import { styles } from '../constants';

const H2 = ({
  children,
  center,
  margin,
  size,
  color = styles.primaryColor,
  id = '',
  style = '',
  mStyle = '',
  sStyle = '',
}: ITextBaseProps & { size?: string }) => (
  <h2 id={id}>
    {children}
    <style jsx>
      {`
      h2 {
        font-size: ${size ? size : '32px;'};
        font-weight: 600;
        line-height: 1.3;
        color: ${color};
        ${margin ? `margin: ${margin};` : ''}
        ${center ? 'text-align: center;' : ''}
        ${style};
      }
      @media only screen and (max-width: 1024px) {
        h2 {
          text-align: center;
          ${mStyle};
        }
      }

      @media only screen and (max-width: 554px) {
        h2 {
          text-align: center;
          ${sStyle};
        }
      }
    `}
    </style>
  </h2>
);

export default H2;
