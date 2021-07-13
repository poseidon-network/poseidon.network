import { useState, useEffect } from 'react';

import { whitepaperList } from '../data';
import { withTranslation, i18n } from '../i18n';
import { styles } from '../constants';

interface IProps {
  changeLanguage: (lang: string) => () => void;
  langIconClass: string;
}

const Menu = ({ changeLanguage, langIconClass, t }: IProps & ITrans) => {
  const [currentPath, setCurrentPath] = useState<string>('');
  const [currentLang, setLang] = useState<string>(i18n.language);

  useEffect(() => {
    setCurrentPath(window.location.pathname.replace(/\//g, ''));
    setLang(i18n.language);
  }, [i18n.language]);

  const itemActiveClass = (path: string) =>
    currentPath === path ? 'is-active' : '';

  return (
    <nav className="navigation" role="navigation">
      <ul>
        <li className="item">
          <a href="/technology" className={itemActiveClass('technology')}>
            {t('nav.technology')}
          </a>
        </li>
        <li className="item">
          <a href="/community" className={itemActiveClass('community')}>
            {t('nav.community')}
          </a>
        </li>
        <li className="item">
          <a href="/token" className={itemActiveClass('token')}>
            {t('nav.token')}
          </a>
        </li>
        <li className="item">
          <a href="/company" className={itemActiveClass('company')}>
            {t('nav.company')}
          </a>
        </li>
        <li className="item">
          <a className="dropdown-trigger">
            {t('nav.whitepaper')}
            <img className="down-arrow" src="/static/down-arrow@2x.png" />
          </a>
          <ul className="dropdown">
            {whitepaperList.map(item => (
              <li key={item.flag}>
                <a href={item.uri}>
                  <span className={`flag-icon flag-icon-${item.flag}`} />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li className="item">
          <a className="dropdown-trigger">
            <span
              style={{ marginRight: 8 }}
              className={`flag-icon flag-icon-${langIconClass}`}
            />
            <img className="down-arrow" src="/static/down-arrow@2x.png" />
          </a>
          <ul className="dropdown">
            <li>
              <a
                onClick={changeLanguage('en')}
                className={currentLang === 'en' ? 'is-active' : ''}
              >
                <span className="flag-icon flag-icon-us" />
                English
              </a>
            </li>
            <li>
              <a
                onClick={changeLanguage('zh-TW')}
                className={currentLang === 'zh-TW' ? 'is-active' : ''}
              >
                <span className="flag-icon flag-icon-tw" />
                繁體中文
              </a>
            </li>
            <li>
              <a
                onClick={changeLanguage('zh-CN')}
                className={currentLang === 'zh-CN' ? 'is-active' : ''}
              >
                <span className="flag-icon flag-icon-cn" />
                簡體中文
              </a>
            </li>
            <li>
              <a
                onClick={changeLanguage('ja')}
                className={currentLang === 'ja' ? 'is-active' : ''}
              >
                <span className="flag-icon flag-icon-jp" />
                日本語
              </a>
            </li>
            <li>
              <a
                onClick={changeLanguage('ko')}
                className={currentLang === 'ko' ? 'is-active' : ''}
              >
                <span className="flag-icon flag-icon-kr" />
                한국어
              </a>
            </li>
            <li>
              <a
                onClick={changeLanguage('vi')}
                className={currentLang === 'vi' ? 'is-active' : ''}
              >
                <span className="flag-icon flag-icon-vn" />
                Tiếng Việt
              </a>
            </li>
            <li>
              <a
                onClick={changeLanguage('th')}
                className={currentLang === 'th' ? 'is-active' : ''}
              >
                <span className="flag-icon flag-icon-th" />
                ภาษาไทย
              </a>
            </li>
            <li>
              <a
                onClick={changeLanguage('ru')}
                className={currentLang === 'ru' ? 'is-active' : ''}
              >
                <span className="flag-icon flag-icon-ru" />
                ру́сский язы́к
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <style jsx>{`
        a {
          cursor: pointer;
          color: ${styles.primaryColor};
          transition: color 0.3s;
        }

        a:hover {
          color: ${styles.lightColor};
        }

        a.is-active {
          color: ${styles.lightColor};
          font-weight: bold;
        }

        nav {
          display: flex;
          width: 100%;
          flex-direction: row;
          justify-content: flex-end;
        }

        .down-arrow {
          width: 28px;
          height: 28px;
        }

        .flag-icon {
          margin-right: 13px;
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
          color: #1d202b !important;
        }

        .dropdown {
          display: flex;
          border-radius: 2px;
          box-shadow: 0 5px 15px 0 #1d202b;
          background-color: #d7f2ee;
          flex-direction: column;
          margin: 8px 10px 0;
          padding: 16.4px 15px 0;
          transform: translateX(-50px);
          position: absolute;
          transition: visibility 0.1s;
          visibility: hidden;
          position: absolute;
          top: 55px;
          z-index: 10;
        }

        .dropdown-trigger:hover ~ .dropdown,
        .dropdown:hover {
          visibility: visible;
        }

        .item a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .navigation > ul {
          display: flex;
          flex-direction: row;
          margin: 0;
        }

        .navigation li {
          margin-left: 24px;
          display: flex;
          align-items: center;
        }

        .navigation a {
          font-size: 16px;
        }

        @media only screen and (max-width: 1024px) {
          .navigation {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default withTranslation('nav')(Menu);
