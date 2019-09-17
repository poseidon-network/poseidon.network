import React from 'react';
import Page from '../components/edge/Page';
import Download from '../components/edge/Download';
import Link from '../components/edge/Link';
import Gain from '../components/edge/Gain';
import { withTranslation } from '../i18n';

class Edge extends React.Component<any> {
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
      <Page title={'Poseidon Network | QEdge'}>
        <Download />
        <Link sn={this.state.sn} />
        <Gain />
      </Page>
    );
  }
}

export default withTranslation('edge')(Edge);
