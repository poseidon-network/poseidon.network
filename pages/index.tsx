import Page from '../components/Page';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Indicators from '../components/Indicators';
import Intro from '../components/Intro';
import Features from '../components/Features';
import Partners from '../components/Partners';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => ((
  <Page title="Poseidon Network">
    <Nav />
    <Header />
    <Indicators />
    <Intro />
    <Features />
    <Partners />
    <Roadmap />
    <Team />
    <Contact />
    <Footer />
  </Page>
));

export default Index;
