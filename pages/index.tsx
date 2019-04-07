import Page from '../layout/Page';
import Header from '../components/Header';
import Indicators from '../components/Indicators';
import Intro from '../components/Intro';
import Features from '../components/Features';
import Partners from '../components/Partners';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Index = () => ((
  <Page title="Poseidon Network">
    <Header />
    <Indicators />
    <Intro />
    <Features />
    <Partners />
    <Roadmap />
    <Team />
    <Contact />
  </Page>
));

export default Index;
