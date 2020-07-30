import React from 'react';

interface IProps {
  children?: React.ReactNode;
  flex?: boolean;
  style?: string;
  mStyle?: string;
  sStyle?: string;
  fadeInUp?: boolean;
}

const Col = ({
  children,
  flex = false,
  style = '',
  mStyle = '',
  sStyle = '',
}: IProps) => (
  <div className="col">
    {children}
    <style jsx>{`
      .col {
        flex: 1;
        ${flex ? 'display: flex; flex-direction: column;' : ''}
        ${style}
      }

      @media only screen and (max-width: 1024px) {
        .col {
          ${mStyle}
        }
      }

      @media only screen and (max-width: 554px) {
        .col {
          ${sStyle}
        }
      }
    `}</style>
  </div>
);

export default Col;
