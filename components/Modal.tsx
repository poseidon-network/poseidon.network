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
    top: 40%;
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
