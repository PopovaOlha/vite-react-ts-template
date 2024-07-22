import * as React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useSearchCharactersQuery } from '../../slices/searchApiSlices';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import Search from '../../components/Search/Search';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../../components/ErrorFallback/ErrorFallback';
import ErrorTestButton from '../../components/ErrorTestButton/ErrorTestButton';
import styles from './Main.module.css';
import SearchResults from '../../components/SearchResults/SearchResults';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import backgroundImage from '../../../assets/1625667391_7-kartinkin-com-p-zvezdnie-voini-oboi-krasivie-8.jpg';
import {
  setSearchResults,
  setCurrentPage,
  setSearchTerm,
} from '../../slices/searchSlice';
import { useTheme } from '../../context/ThemeContext';

const Main: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
    const params = new URLSearchParams(location.search);
    const savedTerm = params.get('searchTerm') || '';
    const page = parseInt(params.get('page') || '1', 10);
    dispatch(setSearchTerm(savedTerm));
    dispatch(setCurrentPage(page));
  }, [location.search, dispatch]);

  React.useEffect(() => {
    if (searchResults) {
      dispatch(setSearchResults({ page: currentPage, results: searchResults }));
    }
  }, [searchResults, currentPage, dispatch]);

  const handleSearch = (term: string) => {
    dispatch(setSearchTerm(term.trim()));
    dispatch(setCurrentPage(1));
    navigate(`/?searchTerm=${term.trim()}&page=1`);
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
    dispatch(setCurrentPage(page));
    navigate(`/?searchTerm=${searchTerm}&page=${page}`);
  };

  return (
    <div
      className={`${styles.main} ${theme === 'dark' ? styles.dark : styles.light}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
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
