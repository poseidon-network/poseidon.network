import Head from 'next/head';
import Page from '../components/Page';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Preview from '../components/Preview';

const Index = () => ((
  <Page>
    <Head>
      <title>Poseidon Network</title>
    </Head>
    <Nav />
    <Preview />
    <Footer />
  </Page>
));

export default Index;
