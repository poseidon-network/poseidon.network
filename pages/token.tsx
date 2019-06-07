import React from 'react';
import Page from '../layout/Page';
import Contact from '../components/Contact';
import Intro from '../components/token/Intro';
import UseCase from '../components/token/UseCase';
import Work from '../components/token/Work';
import GetToken from '../components/token/GetToken';
import { withNamespaces } from '../i18n';
import { styles } from '../constants';

class Token extends React.Component<any> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'nav', 'footer', 'token'],
    };
  }

  render() {
    return (
      <Page
        title={`Poseidon Network | ${this.props.t('token.html.title')}`}
        navColor={styles.darkLight}
      >
        <Intro />
        <UseCase />
        <Work />
        <GetToken />
        <Contact />
      </Page>
    );
  }
}

export default withNamespaces('token')(Token);
