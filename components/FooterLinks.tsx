import H4 from './H4';
import { styles } from '../constants';
import { withTranslation } from '../i18n';

interface IProps extends ITrans {
  title: string;
  links: any[];
}

const FooterLinks = ({ title, links, t }: IProps) => {
  return (
    <div className="footer-links">
      <H4 color={styles.primaryColor} margin="0 0 20px">
        {t(title)}
      </H4>
      <div className="links">
        {links.map(({ uri, title }) => (
          <a key={title} href={uri}>
            {t(title)}
          </a>
        ))}
      </div>
      <style jsx>{`
        .footer-links {
          width: 140px;
          margin-left: 40px;
        }

        a {
          font-size: 16px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.5;
          letter-spacing: 0.3px;
          color: #d7f2ee;
        }

        .links {
          display: flex;
          flex-direction: column;
        }

        @media only screen and (max-width: 1024px) {
          .footer-links {
            margin: 30px 0;
          }
        }

        @media only screen and (max-width: 554px) {
          .footer-links {
            margin: 30px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default withTranslation('footer')(FooterLinks);
