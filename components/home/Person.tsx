import H3 from '../H3';
import { styles } from '../../constants';

interface IPerson {
  name: string;
  title: string;
  avatar: string;
  backgroundColor?: string;
  nameColor?: string;
  titleColor?: string;
}

const Person = ({
  name,
  title,
  avatar,
  nameColor = styles.primaryColor,
  titleColor = styles.lightColor,
}: IPerson) => (
  <div className="container">
    <div className="avatar">
      <img alt={name} src={avatar} />
    </div>
    <div className="content">
      <H3 color={nameColor} margin="0 0 10px">
        {name}
      </H3>
      <h5>{title}</h5>
    </div>

    <style jsx>{`
      .container {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      img {
        width: 160px;
        height: 160px;
        border-radius: 60px;
        background-blend-mode: multiply;
        background-image: linear-gradient(to bottom, #d7f2ee, #d7f2ee);
        margin-bottom: 30px;
        background-color: #1d202b;
      }

      h5 {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.88;
        letter-spacing: 0.3px;
        text-align: center;
        color: ${titleColor};
        margin: 0;
      }

      @media only screen and (max-width: 768px) {
      }

      @media only screen and (max-width: 554px) {
        img {
          width: 141px;
          height: 141px;
        }
      }
    `}</style>
  </div>
);

export default Person;
