import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const SocialShareList = ({ link }: { link: string }) => ((
  <div className="container">
    <a href={`mailto:?subject=&body=${link}`}>
      <img src="/static/ic-mail@2x.png" />
    </a>
    <a href={`https://facebook.com/sharer/sharer.php?u=${link}`}>
      <img src="/static/ic-facebook@2x.png" />
    </a>
    <a href={`https://twitter.com/intent/tweet/?text=&url=${link}`}>
      <img src="/static/ic-twitter@2x.png" />
    </a>

    <CopyToClipboard text={link}>
      <div className="clipboard">
        <img src="/static/ic-copylink@2x.png" />
      </div>
    </CopyToClipboard>

    <style jsx>{`
      .container {
        position: absolute;
        background-color: #fff;
        width: 236px;
        display: flex;
        justify-content: space-between;
      }

      img {
        width: 22px;
        height: 22px;
        opacity: 0.32;
        margin: 11px 15px;
        cursor: pointer;
      }


      .clipboard > img {
        opacity: 1;
      }
    `}</style>
  </div>
));

export default SocialShareList;
