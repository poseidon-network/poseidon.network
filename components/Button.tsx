import React from 'react';
import { styles } from '../constants';

const Button = ({
  uri,
  title,
  width,
  margin,
  mStyle = '',
  sStyle = '',
}: {
  uri: string;
  title: string | React.ReactNode;
  width?: string;
  margin?: string;
  mStyle?: string;
  sStyle?: string;
}) => {
  return (
    <a href={uri}>
      {title}
      <style jsx>{`
        a {
          width: ${width ? width : '100%'};
          text-align: center;
          border-radius: 28px;
          border: solid 1px #90cfbe;
          padding: 17px 20px 15px;
          text-decoration: none;
          display: flex;
          justify-content: center;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.3px;
          text-align: center;
          color: #90cfbe;
          transition: background-color 0.3s;
          ${margin ? `margin: ${margin};` : ''}
        }

        a:hover {
          background-color: ${styles.primaryColor};
          color: ${styles.darkLight};
        }

        @media only screen and (max-width: 1024px) {
          a {
            ${mStyle};
          }
        }

        @media only screen and (max-width: 554px) {
          a {
            ${sStyle};
          }
        }
      `}</style>
    </a>
  );
};

export default Button;
