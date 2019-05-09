import P from './P';
import H3 from './H3';

interface IProps {
  imageUri: string;
  title: string;
  description: string;
}

const SolutionItem = ({ imageUri, title, description }: IProps) => ((
  <div>
    <div className="img-container">
      <img src={imageUri} alt="icon" />
    </div>
    <H3 center>{ title }</H3>
    <P style="width: 263px">{ description }</P>

    <style jsx>{`
      div {
        flex: 1;
        width: 263px;
      }

      .img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        width: 210px;
        height: 210px;
      }

      h3 {
        color: #222633;
        font-size: 20px;
        text-align: center;
        margin-bottom: 8px;
      }
    `}</style>
  </div>
));

export default SolutionItem;
