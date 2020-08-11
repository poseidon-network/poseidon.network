import React from 'react';
import Page from '../layout/Page';
import P from '../components/P';
import Content from '../components/Content';
import Section from '../components/Section';
import H2 from '../components/H2';

class Privacy extends React.Component<any> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'nav', 'footer'],
    };
  }

  render() {
    return (
      <Page title="Poseidon Network | Privacy">
        <Section>
          <H2 center>Privacy Policy</H2>
          <Content>
            <P>
              Poseidon network (hereinafter referred to as "the company") is
              managed by Poseidon Network (hereinafter referred to as "the
              company"). To respect and protect the privacy of each user, the
              company will follow this privacy policy. And the Personal Data
              Protection Act provides for the collection, use, processing and
              protection of users' personal data. It is recommended that all
              users carefully review and understand this Privacy Policy and our
              User Terms before using the Service and dealing with the Company.
              By using the Service, the User has accepted the actions described
              in this Privacy Policy, and the terms of the article and the
              company's rights and obligations and privacy policy are based on
              the contract between the parties.
              <ul>
                <li>
                  1. For the collection of user data, the Service is subject to
                  the specifications of the Personal Data Protection Act of the
                  Republic of China.
                </li>
                <li>
                  2. Users who use the service, join members of the service
                  website or participate in some activities may be required to
                  fill in personal information such as name, age, gender, e-mail
                  address, etc., the purpose of which is to increase the
                  understanding of the members to provide better service. For
                  users who choose Facebook, Google, Line, Kakao to log in
                  quickly, the company complies with Facebook, Google, Line,
                  Kakao's privacy policy and advertising regulations. Relevant
                  personal information collected from user authorization is only
                  applicable to use. The services provided by the company. When
                  users log in through Facebook, Google, Line, Kakao, the
                  company only collects and uses the user's account on Facebook,
                  Google, Line, Kakao, and the user to set public information on
                  Facebook, Google, Line, Kakao (such as public Personal
                  profiles, friends lists, emails, newsletters, birthdays,
                  current cities and profiles, etc., provide customized content
                  and services.
                </li>
                <li>
                  3. When the user's personal data is changed or the personal
                  information is found to be incorrect, you can request
                  corrections at any time in the service related website,
                  including requesting to stop sending relevant information.
                  When the purpose of the user's personal data collection
                  disappears or the term expires, the user agrees that the
                  service may continue to store, process or utilize the user's
                  personal data.
                </li>
                <li>
                  4. If the company holds a lucky draw or any return event, the
                  winning contact information provided by the user to the
                  organizer is only for the event and the company. The company
                  will not directly deliver or sell the event materials to a
                  third party. . After the user joins the membership or fills in
                  the activity materials, the company may use the contact
                  information filled out by the user to send the electronic
                  advertisements of related products, newsletters or events.
                </li>
                <li>
                  5. If the company cooperates with third-party services, it
                  shall also require the third-party website to use the
                  corresponding agreement and privacy policy in accordance with
                  the law. The company will do its utmost to ensure the security
                  of all members' personal data.
                </li>
                <li>
                  6. The company or related companies or partners will use the
                  user's personal data in the necessary scope of the company's
                  business development and the time and region in which the
                  service is conducted. However, the company will never sell or
                  disclose it to other unrelated third parties and units, and it
                  is strictly forbidden for internal personnel to use this
                  information privately.
                </li>
                <li>
                  7. If the user requests the company to stop collecting,
                  processing, utilizing or deleting the personal data, the user
                  can contact the service by email. If the user makes the above
                  request, it is deemed that the user simultaneously applies for
                  termination of all services of the service website.
                </li>
                <li>
                  8. The service web server automatically records the web page
                  the user is reading, the domain name from which it came from,
                  and uses other third-party services, including Google
                  Analytics, as a basis for content and system improvements, and
                  for evaluating the effectiveness of the ad. This part of the
                  information is used for statistical analysis of data, except
                  for internal reference, and will be provided to advertisers as
                  the basis for evaluation of advertising effectiveness. To
                  learn how Google Analytics collects and uses user personal
                  information, please refer to its privacy policy.
                </li>
                <li>
                  9. In order to provide users with a better experience, the
                  company's APP may use cookie technology to provide a service
                  that is more suitable for the user's personal needs; cookie is
                  a technology used by the website server to communicate with
                  the user's browser, it may be in use Some information is
                  stored in the computer, but the user can freely cancel or
                  restrict this function through the settings of the browser.
                </li>
                <li>
                  10. The information collected by the company will be stored in
                  the GCP cloud host operated by the company.
                </li>
                <li>
                  11. The records and information of the users participating in
                  some of the event services will be publicly displayed on the
                  event page of the website; if participating in the activities
                  organized by the company, the user agrees that the company
                  publicly displays some of the activity records.
                </li>
                <li>
                  12. For service users, some of the web pages of this service
                  may contain links to external sites. The company does not have
                  any responsibility for the privacy policy of third-party
                  websites linked through this website.
                </li>
                <li>
                  13. The protection of this privacy right comes into effect
                  from the establishment of this website. However, in accordance
                  with the changes in the social environment and laws and
                  regulations, the privacy policy of the company may be changed
                  at any time with the needs of the website business, unless
                  otherwise stated. The revised terms will automatically take
                  effect from the posting date, please check back periodically.
                </li>
              </ul>
              If you have any questions about the privacy policy of this service
              or your personal information, please feel free to contact us by
              email: service@poseidon.network
            </P>
          </Content>
        </Section>
      </Page>
    );
  }
}

export default Privacy;
