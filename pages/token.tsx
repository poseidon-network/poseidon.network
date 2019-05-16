import Page from '../layout/Page';
import Contact from '../components/Contact';
import Intro from '../components/token/Intro';
import UseCase from '../components/token/UseCase';
import Work from '../components/token/Work';
import GetToken from '../components/token/GetToken';

import { styles } from '../constants';

const Token = () => ((
  <Page title="Poseidon Network | Token" navColor={styles.darkLight}>
    <Intro />
    <UseCase />
    <Work />
    <GetToken />
    <Contact />
  </Page>
));

export default Token;
