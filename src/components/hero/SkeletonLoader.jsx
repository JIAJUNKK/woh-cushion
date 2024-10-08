import React from 'react';
import './skeleton.scss';  // Create a new SCSS file for styling

const SkeletonLoader = () => {
  return (
    <div className="skeleton-brand-container">
      {[...Array(6)].map((_, index) => (  // Adjust the number according to how many skeletons you need
        <div key={index} className="skeleton-brand-rectangle" />
      ))}
    </div>
  );
};

export default SkeletonLoader;
