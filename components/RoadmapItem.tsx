interface IProps {
  time: string;
  title?: string;
  description?: string;
  active?: boolean;
  done?: boolean;
  lastone?: boolean;
}

const RoadmapItem = ({ time, title, description, done, active, lastone }: IProps) => ((
  <div className="container">
    <div className="time-wrapper">
      <h3 className="time">{ time }</h3>
    </div>
    <div className="content-wrapper">
      <div className="content">
        <p className="title">{ title }</p>
        <p className="description">{ description }</p>
      </div>
    </div>

    <style jsx>{`
      .container {
        padding: 0;
        position: relative;
      }

      .time {
        font-size: 20px;
        margin: 0;
      }

      .time-wrapper::before{
        position: absolute;
        left: -10px;
        top: -10px;
        content: '';
        display: inline-block;
        width: 40px;
        height: 40px;
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
        border-radius: 50%;
        background-color: ${ (done || active) ? '#90cfbe' : '#3f4350'};
        opacity: ${ active ? 0.2 : 0};
      }

      .time::before{
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background-color: ${ (done || active) ? '#90cfbe' : '#3f4350'};
        margin-right: 22px
      }

      .content-wrapper {
        display: flex;
      }

      .content-wrapper::before {
        content: '';
        display: inline-block;
        width: 4px;
        background-color: ${ (done) ? '#90cfbe' : '#3f4350'};
        margin: -3px 22px 0 8px;
        ${ lastone && 'opacity: 0' };
      }

      .content {
        flex: 1;
      }

      .title {
        font-size: 16px;
        padding: 0 0 0 10px;
      }

      .description {
        line-height: 1.31;
        color: #90cfbe;
        font-size: 16px;
        margin: 10px 0 0;
        padding: 0 0 32px 10px;
      }
    `}</style>
  </div>
));

export default RoadmapItem
