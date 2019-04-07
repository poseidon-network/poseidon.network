import React from 'react';
import Head from 'next/head';
import Page from '../components/Page';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Preview from '../components/Preview';
import { ApolloProvider } from 'react-apollo';

import { GRAPHQL_URI } from '../constants';
import CustomApolloClient from '../utils/CustomApolloClient';
import { getUser, logout } from '../utils/auth';

const client = new CustomApolloClient({
  uri: GRAPHQL_URI,
});

interface IState {
  user: {
    id?: string;
    token?: string;
    avatar?: string;
  };
  isLogin: boolean;
}

class Index extends React.Component<{}, IState> {
  state: IState = {
    user: {},
    isLogin: false,
  };

  componentDidMount() {
    const user = getUser();
    if (user) {
      this.setState({
        user,
        isLogin: true,
      });
    }
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Page title="Poseidon Network | Preview">
          <Nav user={this.state.user} logout={logout} />
          <Preview isLogin={this.state.isLogin} />
          <Footer />
        </Page>
      </ApolloProvider>
    );
  }
}

export default Index;
