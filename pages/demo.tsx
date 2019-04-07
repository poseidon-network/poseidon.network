import Page from '../components/Page';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Demo from '../components/Demo';
import Intro from '../components/dapp/Intro';

const Index = () => ((
  <Page title="Poseidon Network | Demo">
    <Nav />
    <Intro />
    <Demo />
    <Footer />
  </Page>
));

export default Index;
