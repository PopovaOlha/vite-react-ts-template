import * as React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useSearchCharactersQuery } from '../../slices/searchApiSlices';
import Search from '../../components/Search/Search';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../../components/ErrorFallback/ErrorFallback';
import ErrorTestButton from '../../components/ErrorTestButton/ErrorTestButton';
import styles from './Main.module.css';
import SearchResults from '../../components/SearchResults/SearchResults';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';

const Main: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const navigate = useNavigate();
  const location = useLocation();

  const { data: searchResults, isLoading } = useSearchCharactersQuery({
    searchTerm,
    page: currentPage,
  });

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const savedTerm = localStorage.getItem('searchTerm') || '';
    const page = parseInt(params.get('page') || '1', 10);
    setSearchTerm(savedTerm);
    setCurrentPage(page);
  }, [location.search]);

  const handleSearch = (term: string) => {
    setSearchTerm(term.trim());
    setCurrentPage(1);
    navigate(`/?searchTerm=${term.trim()}&page=1`);
    localStorage.setItem('searchTerm', term.trim());
  };

  const handleItemClick = (id: string) => {
    navigate(`/details/${id}?frontpage=${currentPage}`);
  };

  const handleLeftSectionClick = () => {
    if (location.pathname.startsWith('/details/')) {
      navigate(`/?searchTerm=${searchTerm}&page=${currentPage}`);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    navigate(`/?searchTerm=${searchTerm}&page=${page}`);
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
                results={searchResults || []}
                onItemClick={handleItemClick}
              />
            )}
            {!isLoading && searchResults && searchResults.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={9}
                onPageChange={handlePageChange}
                searchTerm={searchTerm}
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
