import Page from '../layout/Page';
import Contact from '../components/Contact';
import Header from '../components/community/Header';
import Miner from '../components/community/Miner';
import Embassador from '../components/community/Embassador';
import Blog from '../components/community/Blog';
import { styles } from '../constants';

const Community = () => (
  <Page title="Poseidon Network | Community" navColor={styles.dark}>
    <Header />
    <Miner />
    <Embassador />
    {/* <Blog /> */}
    <Contact />
  </Page>
);

export default Community;
