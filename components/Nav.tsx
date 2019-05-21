import { useState, useEffect } from 'react';
import i18next from 'i18next';

import Section from './Section';
import { i18n, withNamespaces } from '../i18n';
import { styles } from '../constants';

interface IProps {
  user?: {
    id?: string;
    token?: string;
    avatar?: string;
    name?: string;
  };
  bgColor?: string;
  logout?: () => void;
  t: i18next.TFunction;
}

const Nav = ({ t, bgColor = '#222633' }: IProps) => {
  const [isLangVisiable, setLangVisiable] = useState<boolean>(false);
  const [, setMoreVisiable] = useState<boolean>(false);

  useEffect(() => {
    const hideAll = () => {
      setLangVisiable(false);
      setMoreVisiable(false);
    };

    document.body.addEventListener('click', hideAll);
    return () => {
      document.body.removeEventListener('click', hideAll);
    };
  }, []);

  const changeLanguage = (lang: string) => {
    return () => {
      i18n.changeLanguage(lang);
    };
  };

  return (
    <Section
      bgColor={bgColor}
      color="#fff"
      style="padding-top: 20px !important;"
    >
      <div className="container">
        <a href="/">
          <img className="logo" alt="logo" src="/static/poseidonnetwork.svg" />
        </a>

        <nav className="navigation" role="navigation">
          <ul>
            <li className="item">
              <a href="/technology">{t('Technology')}</a>
            </li>
            <li className="item">
              <a href="/company">{t('Company')}</a>
            </li>
            {/* <li className="item"><a>{t('Solutions')}</a></li>
            <li className="item"><a>{t('Developer')}</a></li>
            <li className="item"><a>{t('Pricing')}</a></li>
            <li className="item">
              <a onClick={() => setMoreVisiable(!isMoreVisiable)}>{t('More')}</a>
                <ul className={`dropdown ${isMoreVisiable ? 'show' : ''}`}>
                  <li><a href="/community">{t('Community')}</a></li>
                  <li><a href="/token">{t('Token')}</a></li>
                  <li>{t('Company')}</li>
                  <li>{t('Help Center')}</li>
                </ul>
            </li> */}
            <li style={{ display: 'none' }} className="item">
              <a onClick={() => setLangVisiable(!isLangVisiable)}>Language</a>
              <ul className={`dropdown ${isLangVisiable ? 'show' : ''}`}>
                <li>
                  <a onClick={changeLanguage('en')}>English</a>
                </li>
                <li>
                  <a onClick={changeLanguage('zh-tw')}>繁體中文</a>
                </li>
                <li>한국어</li>
                <li>Việt Nam</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <nav className="m-nav" role="navigation">
        {/* <div id="profile">
          { user.avatar && <img className="avatar" src={user.avatar} /> }
          <span className="username">{ user.name }</span>
        </div> */}
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <ul id="menu">
            <a href="/technology">
              <li className="item">{t('Technology')}</li>
            </a>
            <a href="/company">
              <li className="item">{t('Company')}</li>
            </a>
            {/* <a href="/demo"><li>Demo</li></a>
            <a href="/tron-dapp"><li>Download</li></a>
            <a href="/#feature"><li>Feature</li></a>
            <a href="/#partners"><li>Partners</li></a>
            <a href="/#roadmap"><li>Roadmap</li></a>
            <a href="/#team"><li>Team</li></a>
            <a href="/#contact"><li>Contact</li></a>
            <a href="https://poseidon.zendesk.com/hc/zh-tw"><li>FAQ</li></a> */}
            {/* { user.token && <a onClick={(e) => { e.preventDefault(); logout && logout(); }} href="/#logout"><li>Logout</li></a> } */}
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .container {
          width: 100%;
          margin: auto;
          display: flex;
          max-width: 1440px;
        }

        a {
          cursor: pointer;
          color: ${styles.primaryColor};
        }

        a:hover {
          color: ${styles.lightColor};
        }

        .logo {
          width: 300px;
        }

        #profile {
          top: 36px;
          right: 110px;
          position: absolute;
          display: flex;
          align-items: center;
        }

        .username {
          font-size: 14px;
        }

        .avatar {
          border-radius: 50%;
          width: 25px;
          height: 25px;
          margin-right: 10px;
        }

        nav {
          display: flex;
          width: 100%;
          flex-direction: row;
          justify-content: flex-end;
        }

        .navigation > ul {
          display: flex;
          flex-direction: row;
          list-style-type: none;
          margin: 0;
        }

        .navigation li {
          margin-left: 24px;
        }

        .navigation a {
          font-size: 16px;
        }

        #menuToggle {
          display: block;
          position: absolute;
          top: 42px;
          right: 50px;
          z-index: 1;
          -webkit-user-select: none;
          user-select: none;
        }

        .dropdown {
          display: flex;
          border-radius: 2px;
          box-shadow: 0 5px 15px 0 #1d202b;
          background-color: #d7f2ee;
          flex-direction: column;
          margin: 8px 10px 0;
          padding: 15px 37px;
          transform: translateX(-50px);
          position: absolute;
          transition: visibility 0.1s;
          visibility: hidden;
        }

        .show {
          visibility: visible;
        }

        .dropdown li {
          font-size: 16px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #1d202b;
          list-style-type: none;
          margin: 0 0 13px;
        }

        .dropdown a {
          color: #1d202b;
        }

        @media only screen and (max-width: 500px) {
          .logo {
            width: 220px;
          }
        }

        #menuToggle input {
          display: block;
          width: 40px;
          height: 32px;
          position: absolute;
          top: -7px;
          left: -5px;
          cursor: pointer;
          opacity: 0; /* hide this */
          z-index: 2; /* and place it over the hamburger */
          -webkit-touch-callout: none;
        }

        /*
        * Just a quick hamburger
        */
        #menuToggle span {
          display: block;
          width: 33px;
          height: 3px;
          margin-bottom: 5px;
          position: relative;
          background: #90cfbe;
          border-radius: 1px;
          z-index: 1;
          transform-origin: 4px 0px;
          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
        }

        #menuToggle span:first-child {
          transform-origin: 0% 0%;
        }

        #menuToggle span:nth-last-child(2) {
          transform-origin: 0% 100%;
        }

        /*
        * Transform all the slices of hamburger
        * into a crossmark.
        */
        #menuToggle input:checked ~ span {
          opacity: 1;
          transform: rotate(45deg) translate(-2px, -1px);
          background: #90cfbe;
        }

        /*
        * Ohyeah and the last one should go the other direction
        */
        #menuToggle input:checked ~ span:nth-last-child(2) {
          transform: rotate(-45deg) translate(-7px, 7px);
        }

        /*
        * Make this absolute positioned
        * at the top right of the screen
        */
        #menu {
          position: absolute;
          right: 0;
          top: -50px;
          width: 300px;
          padding: 50px;

          background: #222633f7;
          list-style-type: none;
          -webkit-font-smoothing: antialiased;
          /* to stop flickering of text in safari */

          transform-origin: 0% 0%;
          transform: translate(120%, 0);

          transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
        }

        #menu li {
          padding: 10px 0;
          font-size: 22px;
        }

        /*
        * And let's slide it in from the left
        */
        #menuToggle input:checked ~ ul {
          transform: none;
        }

        .m-nav {
          display: none;
        }

        @media only screen and (max-width: 768px) {
          .container {
            width: 100%;
          }

          #menuToggle {
            right: 30px;
            top: 30px;
          }

          .m-nav {
            display: block;
          }

          .navigation {
            display: none;
          }
        }
      `}</style>
    </Section>
  );
};

export default withNamespaces('nav')(Nav);
