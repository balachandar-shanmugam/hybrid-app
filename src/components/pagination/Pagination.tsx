import React, {ReactElement} from 'react';
import './Pagination.css';
import { Button, Icon } from '@constellation/core';


function Pagination({ currentPage, totalPages, onPageChange }): ReactElement {

const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l: number;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
	
return rangeWithDots;

}


  return (
    <div id="pagination"  className="pagination-container">
      <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <Icon name= "chevron-left" />
      </Button>
		{getPageNumbers().map((page, index) =>
		page === '...' ? (
			<span key={index} className="dots">...</span>
		) : (
			<button
			key={index}
			onClick={() => onPageChange(Number(page))}
			className={currentPage === page ? 'active' : ''}
			>
			{page}
			</button>
		)
		)}
      <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
       <Icon name= "chevron-right" />
      </Button>
    </div>
  );
};

export default Pagination;
