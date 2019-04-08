import React from 'react';

import Page, { UserContext } from '../layout/Page';
import Preview from '../components/Preview';
import { ApolloProvider } from 'react-apollo';
import { GRAPHQL_URI } from '../constants';
import CustomApolloClient from '../utils/CustomApolloClient';

const client = new CustomApolloClient({
  uri: GRAPHQL_URI,
});

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <Page title="Poseidon Network | Preview">
        <UserContext.Consumer>
          { user =>
            <Preview user={user} />
          }
        </UserContext.Consumer>
      </Page>
    </ApolloProvider>
  );
};

export default Index;
