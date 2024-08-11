'use client';

import * as React from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.themeToggle}>
      <label className={theme === 'light' ? styles.active : ''}>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === 'light'}
          onChange={toggleTheme}
        />
        Light
      </label>
      <label className={theme === 'dark' ? styles.active : ''}>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        Dark
      </label>
    </div>
  );
};

export default ThemeToggle;
