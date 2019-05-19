import P from '../P';
import H3 from '../H3';
import { styles } from '../../constants';

interface IProps {
  time: string;
  title?: string;
  description?: string;
  active?: boolean;
  done?: boolean;
  lastone?: boolean;
  init?: boolean;
  right: boolean;
}

const RoadmapItem = ({
  time,
  description,
  init,
  done,
  active,
  right = false,
}: IProps) => (
  <div className="container">
    <div className="content circle">
      <H3 color={active ? styles.dark : styles.lightColor} margin="0 0 7px">
        {time}
      </H3>
      <P color={active ? styles.dark : styles.lightColor}>{description}</P>
    </div>

    <style jsx>{`
      .container {
        padding: 0;
        position: relative;
        width: 49%;
        display: flex;
        align-self: ${right ? 'flex-end' : 'flex-start'};
        justify-content: ${right ? 'flex-end' : 'flex-start'};
        background-color: ${done && !init
          ? '#216c8a'
          : active
          ? '#90cfbe'
          : 'transparent'};
        min-height: ${init ? '100px' : '131px'};
      }

      .container::before {
        position: absolute;
        ${!right ? 'right: -54px;' : ''}
        ${right ? 'left: -20px;' : ''}
        top: -8px;
        content: '';
        display: inline-block;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: ${active ? styles.primaryColor : 'transparent'};
        opacity: 0.3;
        margin-right: 22px;
      }

      .circle::before {
        position: absolute;
        ${!right ? 'right: -45px;' : ''}
        ${right ? 'left: -22px;' : ''}
        top: 0px;
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${done
          ? '#216c8a'
          : active
          ? '#90cfbe'
          : 'transparent'};
        border: 1px solid
          ${!done && !active ? styles.primaryColor : 'transparent'};
        margin-right: 22px;
      }

      .circle::after {
        position: absolute;
        ${right ? 'left: -14px;' : ''}
        ${!right ? 'right: -15px;' : ''}
        top: 18px;
        content: '';
        width: 0px;
        display: inline-block;
        border: 1px solid #fff;
        border-color: ${done
          ? '#216c8a'
          : active
          ? '#90cfbe'
          : styles.primaryColor};
        border-style: ${done ? 'solid' : 'dashed'};
        height: 85%;
      }

      .content {
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        border: solid 1px #90cfbe;
        border-color: ${init
          ? 'transparent'
          : done
          ? '#216c8a'
          : active
          ? '#90cfbe'
          : styles.primaryColor};
        padding: 30px;
        width: 100%;
      }

      @media only screen and (max-width: 768px) {
        .container {
          width: 48.5%;
        }

        .circle::before {
          ${!right ? 'right: -42px;' : ''}
          ${right ? 'left: -20px;' : ''}
        }

        .circle::after {
          ${!right ? 'right: -12px;' : ''}
          ${right ? 'left: -12px;' : ''}
        }

        .container::before {
          ${!right ? 'right: -51px;' : ''}
          ${right ? 'left: -20px;' : ''}
        }
      }

      @media only screen and (max-width: 554px) {
        .container {
          width: 47%;
        }

        .circle::before {
          ${!right ? 'right: -45px;' : ''}
          ${right ? 'left: -15px;' : ''}
        }

        .circle::after {
          ${!right ? 'right: -15px;' : ''}
          ${right ? 'left: -7px;' : ''}
        }

        .container::before {
          ${!right ? 'right: -53px;' : ''}
          ${right ? 'left: -20px;' : ''}
        }
      }
    `}</style>
  </div>
);

export default RoadmapItem;
