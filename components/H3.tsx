import { styles } from '../constants';

const H3 = ({
  children,
  center,
  margin,
  color = styles.primaryColor,
  id = '',
}: ITextBaseProps) => ((
  <h3 id={id}>
    { children }

    <style jsx>{`
      h3 {
        font-size: 24px;
        font-weight: 600;
        line-height: 1.25;
        letter-spacing: 0.3px;
        color: ${ color };
        ${ margin ? `margin: ${margin};` : 'margin: 0;' }
        ${ center ? 'text-align: center;' : '' }
      }
    `}</style>
  </h3>
));

export default H3;
