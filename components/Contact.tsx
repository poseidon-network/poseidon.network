import Section from './Section';
import ContactForm from './ContactForm';
import { styles } from '../constants';
import H3 from './H3';

const Contact = () => ((
  <Section padding="100px 0 50px" bgColor="#1d202b" color={styles.primaryColor}>
    <H3
      center
      margin="0 0 27px;"
      mStyle="text-align: left;"
      sStyle="text-align: left;"
    >Stay Informed</H3>
    <ContactForm />
    <style jsx>{`
    `}</style>
  </Section>
));

export default Contact;
