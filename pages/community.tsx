import React from 'react';
import Page from '../layout/Page';
import Contact from '../components/Contact';
import Header from '../components/community/Header';
import Miner from '../components/community/Miner';
import Embassador from '../components/community/Embassador';
// import Blog from '../components/community/Blog';
import { styles } from '../constants';

class Community extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'nav', 'footer', 'community'],
    };
  }

  render() {
    return (
      <Page title="Poseidon Network | Community" navColor={styles.dark}>
        <Header />
        <Miner />
        <Embassador />
        {/* <Blog /> */}
        <Contact />
      </Page>
    );
  }
}

export default Community;
