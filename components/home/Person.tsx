import React from 'react';
// @ts-ignore
import SVG from 'react-inlinesvg';

import H3 from '../H3';
import { styles } from '../../constants';

interface IPerson {
  name: string;
  title: string | React.ReactNode;
  avatar: string;
  linkedin?: string;
  twitter?: string;
  avatarLink?: string;
  backgroundColor?: string;
  nameColor?: string;
  titleColor?: string;
}

const Person = ({
  name,
  title,
  avatar,
  avatarLink,
  linkedin,
  twitter,
  nameColor = styles.lightColor,
  titleColor = styles.lightColor,
  backgroundColor = styles.dark,
}: IPerson) => (
  <div className="container">
    <div className="avatar">
      {avatarLink ? (
        <a href={avatarLink}>
          <img className="clickable-avatar" alt={name} src={avatar} />
        </a>
      ) : (
        <img alt={name} src={avatar} />
      )}
    </div>
    <div className="content">
      <div className="social-links">
        {linkedin && (
          <a className="social-link" href={linkedin} target="_open">
            <SVG src="/static/linkedin.svg" className="icon-link">
              <img src="/static/linkedin.svg" />
            </SVG>
          </a>
        )}
        {twitter && (
          <a className="social-link" href={twitter} target="_open">
            <SVG src="/static/twitter.svg" className="icon-link">
              <img src="/static/twitter.svg" />
            </SVG>
          </a>
        )}
      </div>
      <H3 color={nameColor} margin="0 0 10px">
        {name}
      </H3>
      <h5>{title}</h5>
    </div>

    <style jsx>{`
      .container {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }

      img {
        width: 160px;
        height: 160px;
        border-radius: 60px;
        background-blend-mode: multiply;
        background-image: linear-gradient(to bottom, #d7f2ee, #d7f2ee);
        margin-bottom: 30px;
        background-color: ${backgroundColor};
      }

      h5 {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.88;
        letter-spacing: 0.3px;
        text-align: center;
        color: ${titleColor};
        margin: 0;
        white-space: pre-line;
      }

      .social-links {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
      }

      .social-link {
        margin: 0 7.5px 15px;
        display: inline-block;
      }

      .clickable-avatar {
        transition: transform 0.3s linear;
      }

      .clickable-avatar:hover {
        transform: scale(0.95, 0.95);
      }

      @media only screen and (max-width: 1024px) {
      }

      @media only screen and (max-width: 554px) {
        img {
          width: 141px;
          height: 141px;
        }
      }
    `}</style>
  </div>
);

export default Person;
