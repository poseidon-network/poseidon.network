import Section from './Section';
import ContactForm from './ContactForm';
import { styles } from '../constants';
import H3 from './H3';

const Contact = () => ((
  <Section padding="100px 0 50px" bgColor="#1d202b" color={styles.primaryColor}>
    <H3 id="contact" margin="0 0 27px" center>Stay Informed</H3>
    <ContactForm />
    <style jsx>{`
    `}</style>
  </Section>
));

export default Contact;
