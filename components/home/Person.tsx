import H3 from '../H3';

interface IPerson {
  name: string;
  title: string;
  avatar: string;
  backgroundColor?: string;
}

const Person = ({ name, title, backgroundColor = '#90cfbe' }: IPerson) => ((
  <div className="container">
    <div className="avatar">
      {/* <img alt={name} src={avatar}/> */}
    </div>
    <div className="content">
      <H3 margin="0 0 10px">{ name }</H3>
      <h5>{ title }</h5>
    </div>

    <style jsx>{`
      .container {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .avatar {
        width: 160px;
        height: 160px;
        border-radius: 60px;
        background-color: ${backgroundColor};
        margin-bottom: 30px;
      }

      img {
        width: 157px;
        height: 143px;
        background-blend-mode: multiply;
        background-image: linear-gradient(to bottom, #d7f2ee, #d7f2ee);
      }

      h5 {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.88;
        letter-spacing: 0.3px;
        text-align: center;
        color: #d7f2ee;
        margin: 0;
      }
    `}</style>
  </div>
));

export default Person;
