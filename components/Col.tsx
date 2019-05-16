import React from 'react';

const Col = ({ children, style = '' }: { children?: React.ReactNode, style?: string }) => (
  <div className="col">
    { children }
    <style jsx>{`
      .col {
        flex: 1;
        ${style}
      }
    `}</style>
  </div>
);

export default Col;
