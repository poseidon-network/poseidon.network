import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import MoreLink from '../MoreLink';
import Col from '../Col';

const HelpCompany = () => ((
  <Section bgColor="#222633" color="#fff" padding="0 0 100px">
    <Content direction="row">
      <Col>
        <H2 margin="0 0 15px">Help Company to Do Good Things</H2>
        <P margin="0 0 30px 0">The following article covers a topic that has recently moved to center stage–at least it seems that way. If you’ve been thinking you need to know more about unconditional love, here’s your opportunity.</P>
        <MoreLink uri="" />
      </Col>
      <Col />
      <style jsx>{`
        .col {
          flex: 1;
        }
      `}</style>
    </Content>
  </Section>
));

export default HelpCompany;
