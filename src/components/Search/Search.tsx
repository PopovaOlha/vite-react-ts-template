import React, { useState, useEffect } from 'react';
import styles from './Search.module.css';
import { SearchProps } from '../../types/interfaces';

const Search: React.FC<SearchProps> = ({
  onSearch,
  searchTerm: initialSearchTerm,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  useEffect(() => {
    const savedTerm = localStorage.getItem('searchTerm');
    if (savedTerm) {
      setSearchTerm(savedTerm);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();
    localStorage.setItem('searchTerm', trimmedSearchTerm);
    onSearch(trimmedSearchTerm);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Enter search term..."
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>
        Search
      </button>
    </div>
  );
};

export default Search;
