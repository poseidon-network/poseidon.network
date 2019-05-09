import React from 'react';

const Col = ({ children }: { children?: React.ReactNode }) => (
  <div className="col">
    { children }
    <style jsx>{`
      .col {
        flex: 1;
      }
    `}</style>
  </div>
);

export default Col;
