import P from '../P';
import H3 from '../H3';

interface IProps {
  imageUri: string;
  title: string;
  description: string;
}

const SolutionItem = ({ imageUri, title, description }: IProps) => (
  <div className="item">
    <div className="img-container">
      <img src={imageUri} alt="icon" />
    </div>
    <H3 color="#d7f2ee" center>
      {title}
    </H3>
    <P style="max-width: 263px">{description}</P>

    <style jsx>{`
      .item {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      .img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 30px;
        width: 210px;
        height: 210px;
        object-fit: contain;
      }

      h3 {
        color: #222633;
        font-size: 20px;
        text-align: center;
        margin-bottom: 8px;
      }

      @media only screen and (max-width: 1024px) {
      }

      @media only screen and (max-width: 554px) {
      }
    `}</style>
  </div>
);

export default SolutionItem;
