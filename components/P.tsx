import { styles } from '../constants';

const P = ({
  children,
  center,
  margin,
  style = '',
  color = styles.lightColor,
  id = '',
}: ITextBaseProps & { style?: string }) => ((
  <p id={id}>
    { children }
    <style jsx>{`
      p {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.88;
        letter-spacing: 0.3px;
        color: ${ color };
        ${ margin ? `margin: ${margin};` : '' }
        ${ center ? 'text-align: center;' : '' }
        ${style}
      }
    `}</style>
  </p>
));

export default P;
