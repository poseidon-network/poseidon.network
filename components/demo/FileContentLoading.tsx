import React from 'react';
import ContentLoader from 'react-content-loader';
import fileStyle from './fileStyle';

const FileCotentLoading = () => (
<React.Fragment>
  <div className="row">
    <div className="file-icon">
      <ContentLoader
        height={15}
        width={15}
        speed={2}
        primaryColor="#bac0d4"
        secondaryColor="#ecebeb"
        primaryOpacity={0.16}
        secondaryOpacity={0.16}
      >
        <rect x="0" y="0" rx="0" ry="0" width="15" height="15" />
      </ContentLoader>
    </div>
    <div className="file-info">
      <ContentLoader
        height={18}
        width={250}
        speed={2}
        primaryColor="#bac0d4"
        secondaryColor="#222633"
        primaryOpacity={0.16}
        secondaryOpacity={0.16}
      >
        <rect x="0" y="2" rx="4" ry="4" width="200" height="3" />
        <rect x="0" y="14" rx="3" ry="3" width="150" height="3" />
      </ContentLoader>
    </div>
    <div className="hash">
      <ContentLoader
        height={18}
        width={170}
        speed={2}
        primaryColor="#bac0d4"
        secondaryColor="#222633"
        primaryOpacity={0.16}
        secondaryOpacity={0.16}
      >
        <rect x="0" y="5" rx="4" ry="4" width="400" height="6.4" />
        <rect x="0" y="23" rx="3" ry="3" width="250" height="6.4" />
      </ContentLoader>
    </div>
    <div className="loading-action">
      <ContentLoader
        height={28}
        width={28}
        speed={2}
        primaryColor="#bac0d4"
        secondaryColor="#222633"
        primaryOpacity={0.16}
        secondaryOpacity={0.16}
      >
        <circle cx="8" cy="10" r="2" />
        <circle cx="16" cy="10" r="2" />
        <circle cx="24" cy="10" r="2" />
      </ContentLoader>
    </div>
  </div>
  <style jsx>
    { fileStyle }
  </style>
</React.Fragment>
);

export default FileCotentLoading;
