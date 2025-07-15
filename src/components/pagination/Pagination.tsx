import React, {ReactElement} from 'react';
import './Pagination.css';
import { Button } from '@constellation/core';


function Pagination({ currentPage, totalPages, onPageChange }): ReactElement {

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div id="pagination"  className="pagination-container">
      <Button onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </Button>
      {Array.from({ length: totalPages }, (_, i) => (
        <Button variation='secondary'
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={currentPage === i + 1 ? 'active' : ''}
        >
          {i + 1}
        </Button>
      ))}
      <Button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
