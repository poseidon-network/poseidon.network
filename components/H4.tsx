import { styles } from '../constants';

const H4 = ({
  children,
  center,
  margin,
  color = styles.primaryColor,
  id = '',
}: ITextBaseProps) => ((
  <h4 id={id}>
    { children }

    <style jsx>{`
      h4 {
        font-family: Montserrat;
        font-size: 15px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 2;
        letter-spacing: 0.2px;
        color: ${ color };
        ${ margin ? `margin: ${margin};` : 'margin: 0;' }
        ${ center ? 'text-align: center;' : '' }
      }
    `}</style>
  </h4>
));

export default H4;
