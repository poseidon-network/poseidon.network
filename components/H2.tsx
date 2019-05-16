import { styles } from '../constants';

const H2 = ({
  children,
  center,
  margin,
  size,
  color = styles.primaryColor,
  id = '',
}: ITextBaseProps & { size?: string }) => ((
  <h2 id={id}>
    { children }
    <style jsx>{`
      h2 {
        font-size: ${ size ? size : '40px;' };
        font-weight: 600;
        line-height: 1.3;
        color: ${ color };
        ${ margin ? `margin: ${margin};` : '' }
        ${ center ? 'text-align: center;' : '' }
      }
    `}</style>
  </h2>
));

export default H2;
