import Head from 'next/head';
import CountUp from 'react-countup';
import H3 from '../H3';
import { withNamespaces } from '../../i18n';

const SocialMeidia = ({
  name,
  img,
  followerNum,
  uri,
}: {
  name: string;
  img: string;
  followerNum: number;
  uri: string;
}) => (
  <div>
    <CountUp
      formattingFn={value => `${(value / 1000).toFixed(1)}K`}
      start={0}
      end={followerNum}
      delay={0}
    >
      {({ countUpRef }) => <h2 ref={countUpRef} />}
    </CountUp>

    <a className="footer" href={uri}>
      <img src={img} alt={name} />
      <H3 color="#d7f2ee" margin="0">
        {name}
      </H3>
    </a>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500"
        rel="stylesheet"
      />
    </Head>
    <style jsx>{`
      h2 {
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
        margin-right: 16px;
      }

      @media only screen and (max-width: 1024px) {
        h2 {
        }
      }

      @media only screen and (max-width: 554px) {
        h2 {
          font-size: 32px;
        }

        img {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default withNamespaces('community')(SocialMeidia);
