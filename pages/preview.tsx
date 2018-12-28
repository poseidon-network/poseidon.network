import Head from 'next/head';
import Page from '../components/Page';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Preview from '../components/Preview';
import { withRouter, SingletonRouter } from 'next/router';

const Index = ({ router }: { router: SingletonRouter }) => ((
  <Page>
    <Head>
      <title>Poseidon Network</title>
    </Head>
    <Nav />
    <Preview fileID={(router.query || {}).q} />
    <Footer />
  </Page>
));

export default withRouter(Index);
