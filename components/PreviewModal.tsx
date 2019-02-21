import React from 'react';
// @ts-ignore
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import css from 'styled-jsx/css';

interface IProps {
  isLogin: boolean;
  onClickLogin: (info: any) => void;
  onClickApp: () => void;
}

const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;

const PreviewModal = ({ isLogin, onClickLogin, onClickApp }: IProps) => (
  <div className="modal">
    <div className="modal-content">
      <p className="modal-text">
        To continue to watch this video, please pay first.
      </p>
      <a className="app-link" href={`poseidon://preview${window.location.search}`} onClick={onClickApp}>Open the APP</a>
      { !isLogin &&
        <small>Already paid?&nbsp;
          {/*
            // @ts-ignore */}
          <FacebookLogin
            appId={FACEBOOK_APP_ID}
            scope="public_profile, email"
            callback={onClickLogin}
            render={(renderProps: any) => (
              <a href="" onClick={(event: React.SyntheticEvent) => {
                event.preventDefault();
                renderProps.onClick();
              }}>login here</a>
            )}
          />
        </small>
      }
    </div>
    <style jsx>
      { style }
    </style>
  </div>
);

const style = css`
  p {
    font-size: 18px;
    margin: 0;
  }

  small {
    font-size: 14px;
  }

  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #00000063;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    color: #fff;
    background: #070707c2;
    padding: 16px 24px;
    border-radius: 10px;
    text-align: center;
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
