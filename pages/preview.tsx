import Head from 'next/head';
import Page from '../components/Page';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Preview from '../components/Preview';
import { ApolloProvider } from 'react-apollo';

import { GRAPHQL_URI } from '../constants';
import CustomApolloClient from '../utils/CustomApolloClient';

const client = new CustomApolloClient({
  uri: GRAPHQL_URI,
});

const Index = () => ((
  <ApolloProvider client={client}>
    <Page>
      <Head>
        <title>Poseidon Network</title>
      </Head>
      <Nav />
      <Preview />
      <Footer />
    </Page>
  </ApolloProvider>
));

export default Index;
