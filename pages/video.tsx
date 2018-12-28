import Head from 'next/head';
import Page from '../components/Page';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Video from '../components/Video';
import { withRouter, WithRouterProps } from 'next/router';
import { NextSFC } from 'next';

const Index: NextSFC<WithRouterProps<{}>> = ({ router }) => ((
  <Page>
    <Head>
      <title>Poseidon Network</title>
    </Head>
    <Nav />
    <Video videoID={router.query.q} />
    <Footer />
  </Page>
));

export default withRouter(Index);
