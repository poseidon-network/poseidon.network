import React from 'react';
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import css from 'styled-jsx/css';

import Modal from '../Modal';

interface IProps {
  isLogin?: boolean;
  onClickLogin: (info: any) => void;
  onClickApp: () => void;
}

const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;

const PreviewModal = ({ isLogin, onClickLogin, onClickApp }: IProps) => (
  <Modal>
    <p className="modal-text">
      To continue to watch this video, please pay first.
    </p>
    <a
      className="app-link"
      href={`poseidon://preview${window.location.search}`}
      onClick={onClickApp}
    >
      Pay on the APP
    </a>
    {!isLogin && (
      <small>
        Already paid?&nbsp;
        <FacebookLogin
          autoLoad
          appId={FACEBOOK_APP_ID}
          scope="public_profile, email"
          callback={onClickLogin}
          render={(renderProps: any) => (
            <a
              href=""
              onClick={(event: React.SyntheticEvent) => {
                event.preventDefault();
                renderProps.onClick();
              }}
            >
              login here
            </a>
          )}
        />
      </small>
    )}
    <style jsx>{style}</style>
  </Modal>
);

const style = css`
  p {
    margin: 0;
  }

  small {
    font-size: 14px;
  }

  .modal-text {
    color: #fff;
    margin: 10px;
    font-size: 18px;
  }

  .app-link {
    font-size: 18px;
    display: block;
  }
`;

export default PreviewModal;
