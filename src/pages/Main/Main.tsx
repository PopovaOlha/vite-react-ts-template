import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
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

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (searchTerm: string) => {
    performSearch(searchTerm.trim());
  };

  const handleItemClick = (id: string) => {
    navigate(`/details/${id}?frontpage=${currentPage}`);
  };

  const handleLeftSectionClick = () => {
    if (location.pathname.startsWith('/details/')) {
      navigate(`/?frontpage=${currentPage}`);
    }
  };

  return (
    <div className={styles.main}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className={styles.topSection}>
          <Search onSearch={handleSearch} searchTerm={searchTerm} />
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.leftSection} onClick={handleLeftSectionClick}>
            {isLoading ? (
              <Loader />
            ) : (
              <SearchResults
                results={searchResults}
                onItemClick={handleItemClick}
              />
            )}
            {!isLoading && searchResults.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={9}
                onPageChange={handlePageChange}
              />
            )}
          </div>
          {location.pathname.startsWith('/details/') && (
            <div className={styles.rightSection}>
              <Outlet />
            </div>
          )}
        </div>
        <ErrorTestButton />
      </ErrorBoundary>
    </div>
  );
};

export default Main;
