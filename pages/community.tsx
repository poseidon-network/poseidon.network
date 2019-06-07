import React from 'react';
import Page from '../layout/Page';
import Contact from '../components/Contact';
import Header from '../components/community/Header';
import Miner from '../components/community/Miner';
import Embassador from '../components/community/Embassador';
// import Blog from '../components/community/Blog';
import { styles } from '../constants';
import { withTranslation } from '../i18n';

class Community extends React.Component<any> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'nav', 'footer', 'community'],
    };
  }

  render() {
    return (
      <Page
        title={`Poseidon Network | ${this.props.t('community.html.title')}`}
        navColor={styles.dark}
      >
        <Header />
        <Miner />
        <Embassador />
        {/* <Blog /> */}
        <Contact />
      </Page>
    );
  }
}

export default withTranslation('community')(Community);
