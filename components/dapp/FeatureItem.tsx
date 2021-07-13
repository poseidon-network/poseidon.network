interface IProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureItem = (props: IProps) => (
  <div className="item">
    <img src={props.icon} />
    <p className="title">{props.title}</p>
    <p className="desc">{props.description}</p>

    <style jsx>{`
      .item {
        width: 320px;
        height: 532px;
        border-radius: 8px;
        box-shadow: 0 10px 20px 0 rgba(90, 173, 151, 0.16);
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-right: 49px;
      }

      .title {
        width: 240px;
        height: 29px;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #222633;
      }

      .desc {
        width: 240px;
        height: 168px;
        font-family: Lato;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: #222633;
      }

      @media only screen and (max-width: 1120px) {
        .item {
          margin-bottom: 49px;
          margin-right: 0;
        }
      }
    `}</style>
  </div>
);

export default FeatureItem;
