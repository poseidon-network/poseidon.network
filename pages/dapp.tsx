import Head from 'next/head';

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
  <Page>
    <Head>
      <title>Poseidon Network DApp</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500" rel="stylesheet" />
    </Head>
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
