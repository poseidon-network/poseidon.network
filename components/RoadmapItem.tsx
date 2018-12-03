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
        background-color: #fff;
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
        background-color: #fff;
        opacity: ${ (done || active) ? 1 : 0.32 };
        margin-right: 22px
      }

      .content-wrapper {
        display: flex;
      }

      .content-wrapper::before {
        content: '';
        display: inline-block;
        width: 4px;
        background-color: #fff;
        opacity: ${ (done) ? 1 : 0.32 };
        margin: -3px 22px 0 8px;
        ${ lastone && 'opacity: 0' };
      }

      .content {
        flex: 1;
      }

      .title {
        font-size: 16px;
        padding: 0 0 0 10px;
        color: #222633;
      }

      .description {
        line-height: 1.31;
        color: #222633;
        font-size: 16px;
        opacity: 0.64;
        margin: 10px 0 0;
        padding: 0 0 32px 10px;
      }
    `}</style>
  </div>
));

export default RoadmapItem;
