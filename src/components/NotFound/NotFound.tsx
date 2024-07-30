import * as React from 'react';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.message}>404 - Page Not Found</div>
        <Link to="/" className={styles.backLink}>
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
