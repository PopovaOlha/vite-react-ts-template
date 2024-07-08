import React, { useEffect, useState, useCallback } from 'react';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../ErrorFallback/ErrorFallback';
import ErrorTestButton from '../ErrorTestButton/ErrorTestButton';
import { Character } from '../../types/interfaces';
import styles from './App.module.css';
import fetchSearchResults from '../../api/api';

const App: React.FC = () => {
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
    <div className={styles.app}>
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

export default App;
