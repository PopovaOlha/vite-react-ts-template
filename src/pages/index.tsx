import * as React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useTheme } from '../context/ThemeContext';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../components/ErrorFallback/ErrorFallback';
import ErrorTestButton from '../components/ErrorTestButton/ErrorTestButton';
import Search from '../components/Search/Search';
import SearchResults from '../components/SearchResults/SearchResults';
import Loader from '../components/Loader/Loader';
import Pagination from '../components/Pagination/Pagination';
import Flyout from '../components/Flyout/Flyout';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import styles from '../styles/index.module.css';
import { setCurrentPage, setSearchTerm } from '../slices/searchSlice';
import Details from './details/[id]';
import { MainProps } from '../types/interfaces';
import { fetchData } from '../utils/fetchData';

const Main: React.FC<MainProps> = ({
  searchResults,
  searchTerm,
  currentPage,
  totalPages,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const isLoading = !searchResults;
  const selectedId = router.query.id as string;

  const handleSearch = (term: string) => {
    dispatch(setSearchTerm(term.trim()));
    dispatch(setCurrentPage(1));
    router.push(`/?searchTerm=${term.trim()}&page=1`);
  };

  const handleItemClick = (id: string) => {
    router.push(`/?searchTerm=${searchTerm}&page=${currentPage}&id=${id}`);
  };

  const handleLeftSectionClick = () => {
    if (selectedId) {
      router.push(`/?searchTerm=${searchTerm}&page=${currentPage}`);
    }
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
    router.push(`/?searchTerm=${searchTerm}&page=${page}`);
  };

  const currentBackgroundImage =
    theme === 'dark'
      ? '/images/star-wars-background-vdgqv4b95q9ur6ak.jpg'
      : '/images/1625667391_7-kartinkin-com-p-zvezdnie-voini-oboi-krasivie-8.jpg';

  const selectedCharacter = searchResults.find(
    (character) => character.id === selectedId,
  );

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
            {isLoading ? (
              <Loader />
            ) : (
              <SearchResults
                results={searchResults}
                onItemClick={handleItemClick}
              />
            )}
            {Array.isArray(searchResults) && searchResults.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                searchTerm={searchTerm}
              />
            )}
          </div>
          {selectedId && (
            <div className={styles.rightSection}>
              {selectedCharacter ? (
                <Details character={selectedCharacter} />
              ) : (
                <div>Character not found</div>
              )}
            </div>
          )}
        </div>
        <ErrorTestButton />
        <Flyout />
      </ErrorBoundary>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<MainProps> = async (
  context,
) => {
  const data = await fetchData(context);

  return { props: data };
};

export default Main;
