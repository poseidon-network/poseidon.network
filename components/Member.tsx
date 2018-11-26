
const Member = ({ name, title, avatar }: { name: string; title: string; avatar: string }) => ((
  <div className="container">
    <div className="avatar-container">
    </div>
    <div className="content">
      <h6>{ title }</h6>
      <h5>{ name }</h5>
    </div>

    <style jsx>{`
      .container {
        width: 150px;
        height: 176px;
        border-radius: 4px;
        box-shadow: 0 2px 16px 0 rgba(34, 38, 51, 0.08);
        background-color: #fff;
        margin-bottom: 16px;
      }

      .avatar-container {
        width: 150px;
        height: 100px;
        border-radius: 4px;
        background-color: rgba(144, 207, 190, 0.1);
      }

      .content {
        padding: 16px;
      }

      h5 {
        margin: 0;
        font-size: 19px;
      }
      
      h6 {
        margin: 0 0 8px;
        color: #90cfbe;
        font-size: 11px;
      }
    `}</style>
  </div>
));

export default Member;
