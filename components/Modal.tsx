import React from 'react';
import css from 'styled-jsx/css';

const Modal = ({ children }: { children: React.ReactNode }) => (
  <div className="modal">
    <div className="modal-content">
      { children }
    </div>
    <style jsx>
      { style }
    </style>
  </div>
);

const style = css`
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
    font-size: 18px;
  }
`;

export default Modal;
