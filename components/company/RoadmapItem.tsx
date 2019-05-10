import P from '../P';
import H3 from '../H3';

interface IProps {
  time: string;
  title?: string;
  description?: string;
  active?: boolean;
  done?: boolean;
  lastone?: boolean;
  right: boolean;
}

const RoadmapItem = ({ time, description, done, active, right = false }: IProps) => ((
  <div className="container">
    <div className="content circle">
      <H3 margin="0 0 7px">{ time }</H3>
      <P>{ description }</P>
    </div>

    <style jsx>{`
      .container {
        padding: 0;
        position: relative;
        width: 49%;
        display: flex;
        align-self: ${right ? 'flex-end' : 'flex-start'};
        justify-content: ${right ? 'flex-end' : 'flex-start'};
      }

      .circle::before{
        position: absolute;
        ${ !right ? 'right: -45px;' : '' }
        ${ right ? 'left: -20px;' : '' }
        top: 0px;
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

      .circle::before{
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

      .circle::after{
        position: absolute;
        ${ right ? 'left: -10px;' : '' }
        ${ !right ? 'right: -13px;' : '' }
        top: 20px;
        content: '';
        width: 0px;
        display: inline-block;
        border: 1px solid #fff;
        height: 85%;
      }

      .content {
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        border: solid 1px #90cfbe;
        padding: 30px;
        width: 98%;
      }
    `}</style>
  </div>
));

export default RoadmapItem;
