import React from 'react';
import styles from './Pagination.module.css';
import PaginationProps from '../../types/interfaces';

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevNext}
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className={styles.currentPage}>{currentPage}</div>
      <button
        className={styles.prevNext}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
