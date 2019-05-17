import React from 'react';
import Page from '../layout/Page';
import Header from '../components/home/Header';
import Intro from '../components/home/Intro';

import Solutions from '../components/home/Solutions';
import Investors from '../components/home/Investors';
import Team from '../components/home/Team';
import Contact from '../components/Contact';
import HelpCompany from '../components/home/HelpCompany';
import SettingUp from '../components/home/SettingUp';
import MediaList from '../components/home/MediaList';
import { styles } from '../constants';

class Homepage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer'],
    };
  }

  render() {
    return (
      <Page navColor={styles.dark} title="Poseidon Network">
        <Header />
        <Intro />
        <Solutions />
        <HelpCompany />
        <SettingUp />
        <Team />
        <Investors />
        <MediaList />
        <Contact />
      </Page>
    );
  }
}

export default Homepage;
