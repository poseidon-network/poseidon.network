import React from 'react';
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
import { withNamespaces } from '../i18n';

class Technology extends React.Component<any> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'nav', 'footer', 'technology'],
    };
  }

  render() {
    return (
      <Page
        title={`Poseidon Network | ${this.props.t('technology.html.title')}`}
      >
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
    );
  }
}

export default withNamespaces('technology')(Technology);
