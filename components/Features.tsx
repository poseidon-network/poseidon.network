import Section from './Section';
import FeatureItem from './FeatureItem';
import Content from './Content';
import { features } from '../data';

const Features = () => ((
  <Section bgColor="#d7f2ee" color="#222633">
    <Content>
      <img id="feature" alt="POSEIDON NETWORK" src="/static/img-logotype@2x.png" />
      <div className="item-container">
        {
          features.map(({ imageUri, title, description }, index) => (
            <FeatureItem key={index} imageUri={imageUri} title={title} description={description}  />
          ))
        }
      </div>

      <style jsx>{`
        img {
          display: block;
          width: 311px;
          margin-bottom: 95px;
          margin-top: 30px;
        }

        @media only screen and (min-width: 600px) {
          .item-container {
            flex-direction: row;
            display: flex;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </Content>
  </Section>
));

export default Features;
