import React from 'react';
import './PageComponent.css';

const PageComponent = ({ children, active }) => {
  return (
    <div className={`pullpage-page ${active ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default PageComponent;