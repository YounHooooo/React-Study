// PullpageContainer.js
import React, { useState, useEffect } from 'react';
import './PullpageContainer.css';

const PullpageContainer = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = React.Children.count(children);

  const handleScroll = (e) => {
    const { deltaY } = e;
    if (deltaY > 0 && currentPage < pageCount - 1) {
      setCurrentPage(currentPage + 1);
    } else if (deltaY < 0 && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const container = document.getElementById('pullpage-container');
    container.addEventListener('wheel', handleScroll);
    return () => {
      container.removeEventListener('wheel', handleScroll);
    };
  }, [currentPage]);

  return (
    <div id="pullpage-container" className="pullpage-container">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          active: index === currentPage,
        })
      )}
    </div>
  );
};

export default PullpageContainer;