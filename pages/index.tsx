import React from 'react';
import Page from '../layout/Page';
import Header from '../components/home/Header';
import Intro from '../components/home/Intro';

import Solutions from '../components/home/Solutions';
import Partners from '../components/home/Partners';
import Team from '../components/home/Team';
import Contact from '../components/Contact';
import Developers from '../components/home/Developers';
import HelpCompany from '../components/home/HelpCompany';
import SettingUp from '../components/home/SettingUp';

class Homepage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer'],
    };
  }

  render() {
    return (
      <Page title="Poseidon Network">
        <Header />
        <Intro />
        <Solutions />
        <Developers />
        <HelpCompany />
        <SettingUp />
        <Team />
        <Partners />
        <Contact />
      </Page>
    );
  }
}

export default Homepage;
