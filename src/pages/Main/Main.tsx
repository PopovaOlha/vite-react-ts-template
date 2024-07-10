import React from 'react';
import Search from '../../components/Search/Search';
import SearchResults from '../../components/SearchResults/SearchResults';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../../components/ErrorFallback/ErrorFallback';
import ErrorTestButton from '../../components/ErrorTestButton/ErrorTestButton';
import styles from './Main.module.css';
import useSearch from '../../hooks/useLocalStorageSearch';

const Main: React.FC = () => {
  const { searchResults, searchTerm, performSearch } = useSearch();

  const handleSearch = (searchTerm: string) => {
    performSearch(searchTerm.trim());
  };

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
