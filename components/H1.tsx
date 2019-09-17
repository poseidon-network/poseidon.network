import { styles } from '../constants';

const H1 = ({
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
  <h1 id={id}>
    {children}
    <style jsx>
      {`
      h1 {
        font-size: ${size ? size : '44px;'};
        font-weight: 600;
        line-height: 1.3;
        color: ${color};
        ${margin ? `margin: ${margin};` : ''}
        ${center ? 'text-align: center;' : ''}
        ${style};
      }
      @media only screen and (max-width: 1024px) {
        h1 {
          text-align: center;
          ${mStyle};
        }
      }

      @media only screen and (max-width: 554px) {
        h1 {
          text-align: center;
          ${sStyle};
        }
      }
    `}
    </style>
  </h1>
);

export default H1;
