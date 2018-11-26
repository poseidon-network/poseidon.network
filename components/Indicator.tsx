interface IProps {
  value: number;
  unit: string;
  description: string;
}
const Indicator = ({ value, unit, description }: IProps) => ((
  <div>
    <p className="value">{ value }<small>{ unit }</small></p>
    <p className="description">{ description }</p>
    <style jsx>{`
      div {
        text-align: center;
        flex: 50%;
        margin-bottom: 42px;
      }

      .value {
        font-size: 40px;
        font-weight: bold;
        margin: 0;
        margin-bottom: 5px;
      }

      small {
        font-size: 20px;
        font-weight: normal;
        margin-left: 5px;
      }

      .description {
        font-size: 16px;
        color: #90cfbe;
        margin: 0;
      }
    `}</style>
  </div>
));

export default Indicator;
