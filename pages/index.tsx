import Page from '../layout/Page';
import Header from '../components/Header';
import Intro from '../components/Intro';

import Solutions from '../components/Solutions';
import Partners from '../components/Partners';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Developers from '../components/Developers';
import HelpCompany from '../components/HelpCompany';
import SettingUp from '../components/SettingUp';

const Index = () => ((
  <Page title="Poseidon Network">
    <Header />
    <Intro />
    <Solutions />
    <Developers />
    <HelpCompany />
    <SettingUp />
    <Team />
    <Partners />
    <Contact />
  </Page>
));

export default Index;
