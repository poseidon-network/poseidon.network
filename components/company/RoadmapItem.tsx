import P from '../P';
import H3 from '../H3';
import { styles } from '../../constants';
import { withTranslation } from '../../i18n';

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
    <div className="content">
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
        height: ${init ? '100px' : '200px'};
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
        white-space: pre-line;
      }

      .container::before {
        position: absolute;
        ${right ? 'left: calc(-2% - 17px);' : 'right: calc(-2.4% - 18px);'}
        top: -8px;
        content: '';
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: ${active ? styles.primaryColor : 'transparent'};
        opacity: 0.3;
      }

      .content::before {
        position: absolute;
        ${right ? 'left: calc(-2% - 8px);' : 'right: calc(-2.4% - 8px);'}
        top: 0px;
        content: '';
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
      }

      .content::after {
        position: absolute;
        ${right ? 'left: -2%;' : 'right: -2.4%;'}
        top: 18px;
        content: '';
        width: 0px;
        border: 1px solid #fff;
        border-color: ${done
          ? '#216c8a'
          : active
          ? '#90cfbe'
          : styles.primaryColor};
        border-style: ${done ? 'solid' : 'dashed'};
        height: 85%;
      }

      @media only screen and (max-width: 1024px) {
        .container {
          width: 48.5%;
          height: initial;
        }

        .content::before {
          ${right ? 'left: calc(-3.2% - 8px);' : 'right: calc(-3.4% - 8px);'}
        }

        .content::after {
          ${right ? 'left: -3.2%;' : 'right: -3.4%;'}
        }

        .container::before {
          ${right ? 'left: calc(-3.2% - 17px);' : 'right: calc(-3.4% - 18px);'}
        }
      }

      @media only screen and (max-width: 554px) {
        .container {
          width: 47%;
        }

        .content::before {
          ${right ? 'left: calc(-4% - 8px);' : 'right: calc(-10% - 8px);'}
        }

        .content::after {
          ${right ? 'left: -4%;' : 'right: -10%;'}
        }

        .container::before {
          ${right ? 'left: calc(-4% - 17px);' : 'right: calc(-10% - 18px);'}
        }
      }
    `}</style>
  </div>
);

export default withTranslation('company')(RoadmapItem);
