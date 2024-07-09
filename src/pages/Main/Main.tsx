import React, { useEffect, useState, useCallback } from 'react';
import Search from '../../components/Search/Search';
import SearchResults from '../../components/SearchResults/SearchResults';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../../components/ErrorFallback/ErrorFallback';
import ErrorTestButton from '../../components/ErrorTestButton/ErrorTestButton';
import { Character } from '../../types/interfaces';
import styles from './Main.module.css';
import fetchSearchResults from '../../api/api';

const Main: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const performSearch = useCallback((searchTerm: string) => {
    fetchSearchResults(searchTerm)
      .then((results) => {
        setSearchResults(results);
        setSearchTerm(searchTerm);
        saveToLocalStorage(searchTerm, results);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (searchTerm: string) => {
    performSearch(searchTerm.trim());
  };

  const saveToLocalStorage = (searchTerm: string, results: Character[]) => {
    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem('searchResults', JSON.stringify(results));
  };

  const loadFromLocalStorage = useCallback(() => {
    const savedTerm = localStorage.getItem('searchTerm');
    const savedResults = localStorage.getItem('searchResults');
    if (savedTerm && savedResults) {
      setSearchResults(JSON.parse(savedResults));
      setSearchTerm(savedTerm);
      performSearch(savedTerm);
    } else {
      performSearch('');
    }
  }, [performSearch]);

  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  return (
    <div className={styles.main}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className={styles.topSection}>
          <Search onSearch={handleSearch} searchTerm={searchTerm} />
        </div>
        <div className={styles.bottomSection}>
          <SearchResults results={searchResults} />
        </div>
        <ErrorTestButton />
      </ErrorBoundary>
    </div>
  );
};

export default Main;
