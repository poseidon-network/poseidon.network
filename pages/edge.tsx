import React from 'react';
import Page from '../components/edge/Page';
import Download from '../components/edge/Download';
import Link from '../components/edge/Link';
import Gain from '../components/edge/Gain';
import { withTranslation } from '../i18n';
import { string } from 'prop-types';

class Edge extends React.Component<any> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }

  constructor(props) {
    super(props);
    this.sn = '';
  }

  async componentDidMount() {
    this.sn = new URLSearchParams(window.location.search).get('sn');
  }

  render() {
    return (
      <Page title={`Poseidon Network | QEdge`}>
        <Download />
        <Link sn={this.sn} />
        <Gain />
      </Page>
    );
  }
}

export default withTranslation('edge')(Edge);
