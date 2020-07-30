import { useState, useEffect } from 'react';

import Section from './Section';
import { i18n, withTranslation } from '../i18n';
import { styles, langIconClassMap } from '../constants';

import Menu from './Menu';
import MobileMenu from './MobileMenu';

interface IProps extends ITrans {
  user?: {
    id?: string;
    token?: string;
    avatar?: string;
    name?: string;
  };
  bgColor?: string;
  logout?: () => void;
}

const Nav = ({ bgColor = '#222633' }: IProps) => {
  const [langIconClass, setLangIconClass] = useState('');
  const [isMobileMenuActive, setMobileMenuActive] = useState<boolean>(false);

  useEffect(() => {
    // fixme: remove later
    console.log(i18n.language);
    setLangIconClass((langIconClassMap as any)[i18n.language]);
  }, [i18n.language]);

  const changeLanguage = (lang: string) => {
    return () => {
      i18n.changeLanguage(lang, (err: any) => {
        if (err) return console.log('something went wrong loading', err);
        localStorage.setItem('i18nextLng', lang);
        setLangIconClass((langIconClassMap as any)[lang]);
      });
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
        <Menu langIconClass={langIconClass} changeLanguage={changeLanguage} />
      </div>

      <div
        onClick={() => setMobileMenuActive(!isMobileMenuActive)}
        id="menuToggle"
        className={`${isMobileMenuActive ? 'is-active' : ''}`}
      >
        <input type="checkbox" />
        <span className="menu-icon" />
        <span className="menu-icon" />
      </div>
      <div
        onClick={() => setMobileMenuActive(false)}
        className={`overlay ${isMobileMenuActive ? 'is-active' : ''}`}
      />
      <MobileMenu
        isOpened={isMobileMenuActive}
        changeLanguage={changeLanguage}
      />
      <style jsx>{`
        .container {
          width: 100%;
          margin: auto;
          display: flex;
          max-width: 1440px;
        }

        .logo {
          width: 300px;
        }

        .overlay {
          display: none;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: ${styles.darkLight};
          box-shadow: 0 5px 15px 0 #1d202b;
          opacity: 0.9;
          z-index: 2;
        }

        .overlay.is-active {
          display: block;
        }

        #menuToggle {
          display: none;
          position: absolute;
          z-index: 9;
          -webkit-user-select: none;
          user-select: none;
          height: 20px;
          width: 20px;
          right: 30px;
          top: 30px;
        }

        #menuToggle input {
          display: block;
          width: 20px;
          height: 20px;
          position: absolute;
          cursor: pointer;
          opacity: 0; /* hide this */
          z-index: 2; /* and place it over the hamburger */
          -webkit-touch-callout: none;
        }

        #menuToggle .menu-icon {
          display: block;
          width: 24px;
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

        #menuToggle .menu-icon:first-child {
          transform-origin: 0% 0%;
        }

        #menuToggle .menu-icon:nth-last-child(2) {
          transform-origin: 0% 100%;
        }

        #menuToggle.is-active input ~ .menu-icon {
          opacity: 1;
          transform: rotate(45deg) translate(-1px, -4px);
          background: #90cfbe;
        }

        #menuToggle.is-active input ~ .menu-icon:nth-last-child(2) {
          transform: rotate(-45deg) translate(-10px, 14px);
        }

        @media only screen and (max-width: 1024px) {
          .container {
            width: 100%;
          }

          #menuToggle {
            display: block;
          }
        }

        @media only screen and (max-width: 500px) {
          .logo {
            width: 220px;
          }
        }
      `}</style>
    </Section>
  );
};

export default withTranslation('nav')(Nav);
