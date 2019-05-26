import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import H3 from '../H3';
import P from '../P';

import { styles } from '../../constants';

const Vaule = () => {
  return (
    <Section
      bgColor={styles.dark}
      color={styles.primaryColor}
      padding="137px 0"
    >
      <H2 center margin="0 0 60px">
        Our Vaule
      </H2>
      <Content
        style="display: grid; grid-template-columns: auto auto auto; grid-gap: 0 31px;"
        mStyle="grid-template-columns: auto; grid-gap: 60px;"
      >
        <div className="value">
          <img className="vaule-img" src="/static/img-spirit.svg" />
          <H3 color={styles.lightColor} center>
            Spirit
          </H3>
          <P mStyle="max-width: 349px; text-align: left;">
            We value our customers — which is why we respect privacy, and don’t
            exploit customer data or end user data. And our team is available to
            help along the way via our support center.
          </P>
        </div>
        <div className="value">
          <img className="vaule-img" src="/static/img-sharing.svg" />
          <H3 color={styles.lightColor} center>
            Sharing
          </H3>
          <P mStyle="max-width: 349px; text-align: left;">
            Our platform helps businesses across industries scale faster and
            more securely, and we’re proud to offer free services for
            open-source and nonprofit projects.
          </P>
        </div>
        <div className="value">
          <img className="vaule-img" src="/static/img-innaovation.svg" />
          <H3 color={styles.lightColor} center>
            Innovation
          </H3>
          <P mStyle="max-width: 349px; text-align: left;">
            From the start, we’ve moved data and applications closer to the end
            user — at the edge of the network — to improve apps and websites.
            Today, we’re continuing to set the industry standard and innovate at
            the edge.
          </P>
        </div>
      </Content>
      <style jsx>{`
        .value {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .vaule-img {
          margin-bottom: 58px;
        }

        @media only screen and (max-width: 1024px) {
        }
      `}</style>
    </Section>
  );
};

export default Vaule;
