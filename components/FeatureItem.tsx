interface IProps {
  imageUri: string;
  title: string;
  description: string;
}

const FeatureItem = ({ imageUri, title, description }: IProps) => ((
  <div>
    <img src={imageUri} alt="icon" />
    <h3>{ title }</h3>
    <p>{ description }</p>

    <style jsx>{`
      div {
        flex: 30%;
      }

      img {
        display: block;
        margin: auto;
        width: 135px;
      }

      h3 {
        color: #222633;
        font-size: 20px;
        text-align: center;
        margin-bottom: 8px;
      }

      p {
        font-size: 16px;
        line-height: 1.31;
        line-height: 1.31;
        opacity: 0.64;
        text-align: center;
        margin-bottom: 70px;
        white-space: pre-line;
      }
    `}</style>
  </div>
));

export default FeatureItem;
