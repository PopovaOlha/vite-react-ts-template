import React from 'react';
import Search from '../../components/Search/Search';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../../components/ErrorFallback/ErrorFallback';
import ErrorTestButton from '../../components/ErrorTestButton/ErrorTestButton';
import styles from './Main.module.css';
import useSearch from '../../hooks/useLocalStorageSearch';
import SearchResults from '../../components/SearchResults/SearchResults';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';

const Main: React.FC = () => {
  const {
    searchResults,
    searchTerm,
    performSearch,
    isLoading,
    currentPage,
    handlePageChange,
  } = useSearch();

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
          {isLoading ? <Loader /> : <SearchResults results={searchResults} />}
          {!isLoading && searchResults.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={9}
              onPageChange={handlePageChange}
            />
          )}
        </div>
        <ErrorTestButton />
      </ErrorBoundary>
    </div>
  );
};

export default Main;
