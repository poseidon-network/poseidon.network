import Section from '../Section';
import Content from '../Content';
// import H2 from '../H2';
import H3 from '../H3';
import Col from '../Col';

const Announcement = () => (
  <Section bgColor="#363D4D" color="#fff" padding="58px 0 58px">
    <Content direction="row" style="align-items: center;">
      <img className="top-img" src="/static/BAS_logo.svg" />
      <Col style="align-items: center;">
        <H3 style="padding: 40px 0;text-align: center;font-size: 18px;">
          Poseidon Network has now joined{' '}
          <a href="https://singaporeblockchain.org/" target="_blank">
            Singapore Blockchain Association
          </a>
        </H3>
      </Col>
    </Content>
    <style jsx>{`
      h3 {
        align-items: center;
      }
      a {
        color: #90cfbe;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.25;
        letter-spacing: 0.3px;
        margin: 0;
      }
      a:hover {
        opacity: 0.85;
      }
    `}</style>
  </Section>
);

export default Announcement;
