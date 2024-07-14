import React from 'react';
import styles from './ErrorTestButton.module.css';

const ErrorTestButton: React.FC = () => {
  const handleError = () => {
    throw new Error('This is a test error');
  };

  return (
    <button className={styles.button} onClick={handleError}>
      Throw Error
    </button>
  );
};

export default ErrorTestButton;
