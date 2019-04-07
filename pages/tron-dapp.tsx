import Page from '../Layout/Page';
import Intro from '../components/dapp/Intro';
import SocialSharing from '../components/dapp/SocialSharing';
import BlockChain from '../components/dapp/Blockchain';
import AdvancedTech  from '../components/dapp/AdvancedTech';
import Features from '../components/dapp/Features';
import CallToAction from '../components/dapp/CallToAction';

const TronApp = () => ((
  <Page title="Poseidon Network | DApp">
    <Intro />
    <SocialSharing />
    <AdvancedTech />
    <BlockChain />
    <Features />
    <CallToAction />
  </Page>
));

export default TronApp;
