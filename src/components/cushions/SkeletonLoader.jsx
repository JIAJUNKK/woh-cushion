import React from 'react';
import './Skeleton.scss';

const SkeletonLoader = () => {
  return (
    <div className="cushion-loading">
      <div className="folder-section">
        
        <div className="cushion-content-container">
          <div className="main-image loading-placeholder">
          </div>

          <div className="detail-images">
            <div className="thumbnail-placeholder loading-placeholder"></div>
            <div className="thumbnail-placeholder loading-placeholder"></div>
            <div className="thumbnail-placeholder loading-placeholder"></div>
          </div>
        </div>

        <div className="cushion-details-container">
            <div className="title-placeholder loading-placeholder"></div>
            <div className="description-placeholder loading-placeholder"></div>
            <div className="price-placeholder loading-placeholder"></div>
        </div>

      </div>
    </div>
  );
};

export default SkeletonLoader;
