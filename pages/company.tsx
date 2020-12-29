import React from 'react';
import Page from '../layout/Page';
import Contact from '../components/Contact';
import Intro from '../components/company/Intro';
import Value from '../components/company/Value';
import Team from '../components/company/Team';
// import Advisors from '../components/company/Advisors';
import Roadmap from '../components/company/Roadmap';
import { withTranslation } from '../i18n';
import { styles } from '../constants';

class Company extends React.Component<any> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'nav', 'footer', 'company'],
    };
  }

  render() {
    return (
      <Page
        title={`Poseidon Network | ${this.props.t('company.html.title')}`}
        navColor={styles.darkLight}
      >
        <Intro />
        <Value />
        <Team />
        {/* <Advisors /> */}
        <Roadmap />
        <Contact />
      </Page>
    );
  }
}

export default withTranslation('company')(Company);
