import Head from 'next/head';
import H3 from '../H3';

const SocialMeidia = ({
  name,
  img,
  followerNum,
}: {
  name: string;
  img: string;
  followerNum: string;
}) => (
  <div>
    <h2>{followerNum}</h2>
    <div className="footer">
      <img src={img} alt={name} />
      <H3 color="#d7f2ee" margin="0">
        {name}
      </H3>
    </div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500"
        rel="stylesheet"
      />
    </Head>
    <style jsx>{`
      h2 {
        width: 262px;
        height: 104px;
        font-family: 'IBM Plex Mono';
        font-size: 80px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #90cfbe;
        margin: 0 0 15px;
      }

      .footer {
        display: flex;
        align-items: center;
      }

      img {
        margin-right: 23.5px;
      }
    `}</style>
  </div>
);

export default SocialMeidia;
