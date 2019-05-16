import Page from '../layout/Page';
import Contact from '../components/Contact';
import Intro from '../components/company/Intro';
import Vaule from '../components/company/Value';
import Team from '../components/company/Team';
import TechTeam from '../components/company/TechTeam';
import Advisors from '../components/company/Advisors';
import Roadmap from '../components/company/Roadmap';

import { styles } from '../constants';

const Company = () => ((
  <Page title="Poseidon Network | Company" navColor={styles.dark}>
    <Intro />
    <Vaule />
    <Team />
    <TechTeam />
    <Advisors />
    <Roadmap />
    <Contact />
  </Page>
));

export default Company;
