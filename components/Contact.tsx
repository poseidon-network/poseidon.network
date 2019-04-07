import Section from './Section';
import H2 from './H2';
import ContactForm from './ContactForm';
import { contact } from '../data';

const Contact = () => ((
  <Section bgColor="#d7f2ee" color="#222633">
    <H2 id="contact" color="#222633" center>{ contact.title }</H2>
    <div className="content">
      <p className="description">{ contact.description }</p>
      <ContactForm />
    </div>
    <style jsx>{`
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .description {
        color: #222633;
        font-size: 16px;
        opacity: 0.64;
        margin-bottom: 30px;
      }
    `}</style>
  </Section>
));

export default Contact;
