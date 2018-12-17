import React from 'react';
import {
  Twitter,
  Facebook,
  Mail,
  Linkedin,
  Telegram,
// @ts-ignore
} from 'react-social-sharing';

const SocialShareList = ({ link }: { link: string }) => ((
  <div>
    <Twitter solid small link={link} />
    <Facebook solid small link={link} />
    <Linkedin solid small link={link} />
    <Telegram solid small link={link} />
    <Mail solid small  link={link} />
  </div>
));

export default SocialShareList;
