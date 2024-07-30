import * as React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import Search from '../components/Search/Search';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../components/ErrorFallback/ErrorFallback';
import ErrorTestButton from '../components/ErrorTestButton/ErrorTestButton';
import styles from '../styles/index.module.css';
import SearchResults from '../components/SearchResults/SearchResults';
import Loader from '../components/Loader/Loader';
import Pagination from '../components/Pagination/Pagination';
import backgroundImageLight from '../../assets/1625667391_7-kartinkin-com-p-zvezdnie-voini-oboi-krasivie-8.jpg';
import backgroundImageDark from '../../assets/star-wars-background-vdgqv4b95q9ur6ak.jpg';
import {
  setSearchResults,
  setCurrentPage,
  setSearchTerm,
} from '../slices/searchSlice';
import { useTheme } from '../context/ThemeContext';
import Flyout from '../components/Flyout/Flyout';
import { useSearchCharactersQuery } from '../slices/searchApiSlices';
import { Outlet } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';

const Main: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const currentPage = useSelector(
    (state: RootState) => state.search.currentPage,
  );
  const resultsByPage = useSelector(
    (state: RootState) => state.search.resultsByPage,
  );
  const isLoading = useSelector((state: RootState) => state.search.isLoading);

  const { data: searchResults, isFetching } = useSearchCharactersQuery({
    searchTerm,
    page: currentPage,
  });

  React.useEffect(() => {
    const { searchTerm: savedTerm = '', page = 1 } = router.query;
    dispatch(setSearchTerm(String(savedTerm)));
    dispatch(setCurrentPage(Number(page)));
  }, [router.query, dispatch]);

  React.useEffect(() => {
    if (searchResults) {
      dispatch(setSearchResults({ page: currentPage, results: searchResults }));
    }
  }, [searchResults, currentPage, dispatch]);

  const handleSearch = (term: string) => {
    dispatch(setSearchTerm(term.trim()));
    dispatch(setCurrentPage(1));
    router.push(`/?searchTerm=${term.trim()}&page=1`);
  };

  const handleItemClick = (id: string) => {
    router.push(`/details/${id}?frontpage=${currentPage}`);
  };

  const handleLeftSectionClick = () => {
    if (router.pathname.startsWith('/details/')) {
      router.push(`/?searchTerm=${searchTerm}&page=${currentPage}`);
    }
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    router.push(`/?searchTerm=${searchTerm}&page=${page}`);
  };

  const currentBackgroundImage =
    theme === 'dark' ? backgroundImageDark : backgroundImageLight;

  return (
    <div
      className={`${styles.main} ${theme === 'dark' ? styles.dark : styles.light}`}
      style={{ backgroundImage: `url(${currentBackgroundImage})` }}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeToggle />
        <div className={styles.topSection}>
          <Search onSearch={handleSearch} searchTerm={searchTerm} />
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.leftSection} onClick={handleLeftSectionClick}>
            {isLoading || isFetching ? (
              <Loader />
            ) : (
              <SearchResults
                results={resultsByPage[currentPage] || []}
                onItemClick={handleItemClick}
              />
            )}
            {!isLoading &&
              resultsByPage[currentPage] &&
              resultsByPage[currentPage].length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={9}
                  onPageChange={handlePageChange}
                  searchTerm={searchTerm}
                />
              )}
          </div>
          {router.pathname.startsWith('/details/') && (
            <div className={styles.rightSection}>
              <Outlet />
            </div>
          )}
        </div>
        <ErrorTestButton />
        <Flyout />
      </ErrorBoundary>
    </div>
  );
};

export default Main;
