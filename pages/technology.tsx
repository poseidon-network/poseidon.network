import Page from '../layout/Page';
import Contact from '../components/Contact';
import Intro from '../components/technology/Intro';
import Scenario from '../components/technology/Scenario';
import Dapp1 from '../components/technology/Dapp1';
import Dapp2 from '../components/technology/Dapp2';
import POD from '../components/technology/POD';
import Demo from '../components/technology/Demo';
import Miner from '../components/technology/Miner';
import Doc from '../components/technology/Doc';

const Technology = () => ((
  <Page title="Poseidon Network | Technology">
    <Intro />
    <Scenario />
    <Dapp1 />
    <Dapp2 />
    <POD />
    <Demo />
    <Miner />
    <Doc />
    <Contact />
  </Page>
));

export default Technology;
