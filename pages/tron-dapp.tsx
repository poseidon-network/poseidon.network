import Page from '../components/Page';
import Nav from '../components/Nav';
import Intro from '../components/dapp/Intro';
import SocialSharing from '../components/dapp/SocialSharing';
import BlockChain from '../components/dapp/Blockchain';
import AdvancedTech  from '../components/dapp/AdvancedTech';
import Features from '../components/dapp/Features';
import CallToAction from '../components/dapp/CallToAction';
import Footer from '../components/dapp/Footer';

const TronApp = () => ((
  <Page title="Poseidon Network | DApp">
    <Nav />
    <Intro />
    <SocialSharing />
    <AdvancedTech />
    <BlockChain />
    <Features />
    <CallToAction />
    <Footer />
  </Page>
));

export default TronApp;
