import * as React from 'react';
import Link from 'next/link';
import styles from '../styles/error.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.message}>404 - Page Not Found</div>
        <Link href="/">
          <a className={styles.backLink}>Go back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
