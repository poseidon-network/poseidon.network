import Layout from '../Layout';
import Content from '../Content';
import FeatureItem from './FeatureItem';

const Features = () => (
  <Layout
    backgroundImage="/static/img-bg-3@2x.jpg"
    bgColor="#1d202b"
    color="#d7f2ee"
    padding="0"
  >
    <Content>
      <div className="main">
        <FeatureItem
          icon="/static/img-1.png"
          title="Sharing Economy"
          description="Utilized unused bandwidth and storage from any NAS, desktop, or mobile devices around the world. It’s distributed, efficient, and integrates perfectly with existing internet and blockchain infrastructure"
        />
        <FeatureItem
          icon="/static/img-2.png"
          title="Faster "
          description={`- the edges at fog are closer to the users, so that latency is lower than the edges at cloud\n
          - Benefit from Edge Computing technology, it’s much faster than cloud infrastructure`}
        />
        <FeatureItem
          icon="/static/img-3.png"
          title="Extra Money"
          description={`- for anyone wants to utilize their unused resources to make passive income, no matter how little it is\n
          - you already pay for the resources you shared, why not make money with idle hardware, no strings attached`}
        />
      </div>
      <style jsx>{`
        .main {
          height: 100vh;
          display: flex;
          align-items: center;
        }

        @media only screen and (max-width: 1120px) {
          .main {
            flex-direction: column;
            height: 100%;
            padding: 30px;
          }
        }
      `}</style>
    </Content>
  </Layout>
);

export default Features;
