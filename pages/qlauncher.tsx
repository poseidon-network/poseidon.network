import React from 'react';
import Page from '../components/qlauncher/Page';
import Download from '../components/qlauncher/Download';
import Link from '../components/qlauncher/Link';
import Gain from '../components/qlauncher/Gain';
import { withTranslation } from '../i18n';

class Qlauncher extends React.Component<any> {
  state = {
    sn: '',
  };

  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }

  async componentDidMount() {
    this.setState({
      sn: new URLSearchParams(window.location.search).get('sn'),
    });
  }

  render() {
    return (
      <Page title={'Poseidon Network | QLauncher'}>
        <Download />
        <Link sn={this.state.sn} />
        <Gain />
      </Page>
    );
  }
}

export default withTranslation('qlauncher')(Qlauncher);
