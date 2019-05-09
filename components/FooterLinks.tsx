import H4 from './H4';

interface IProps {
  title: string;
  links: [];
}

const FooterLinks = ({ title, links }: IProps) => {
  return (
    <div className="footer-links">
      <H4 margin="0 0 20px">{ title }</H4>
      <div className="links">
        { links.map(({ uri, title }) => (
          <a href={uri}>{ title }</a>
        )) }
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
      `}</style>
    </div>
  );
};

export default FooterLinks;
