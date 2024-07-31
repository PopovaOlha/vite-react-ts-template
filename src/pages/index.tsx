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
import backgroundImageLight from '../../assets/1625667391_7-kartinkin-com-p-zvezdnie-voini-oboi-krasivie-8.jpg';
import backgroundImageDark from '../../assets/star-wars-background-vdgqv4b95q9ur6ak.jpg';

import { setCurrentPage, setSearchTerm } from '../slices/searchSlice';
import Details from './details/[id]';
import { APICharacter } from '../types/interfaces';

export interface Props {
  searchResults: Character[];
  searchTerm: string;
  currentPage: number;
  totalPages: number;
}

export interface Character {
  id: string;
  name: string;
  description: string;
  image: string;
  age: string;
  height: string;
  mass: string;
  gender: string;
  films: string[];
  isSelected?: boolean;
}

const Main: React.FC<Props> = ({
  searchResults,
  searchTerm,
  currentPage,
  totalPages,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const isLoading = !searchResults;

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
            {isLoading ? (
              <Loader />
            ) : (
              <SearchResults
                results={searchResults}
                onItemClick={handleItemClick}
              />
            )}
            {searchResults.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                searchTerm={searchTerm}
              />
            )}
          </div>
          {router.pathname.startsWith('/details/') && (
            <div className={styles.rightSection}>
              <Details />
            </div>
          )}
        </div>
        <ErrorTestButton />
        <Flyout />
      </ErrorBoundary>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { searchTerm = '', page = 1 } = context.query;

  const response = await fetch(
    `https://swapi.dev/api/people/?search=${searchTerm}&page=${page}`,
  );
  const data = await response.json();
  const searchResults: Character[] = data.results.map((item: APICharacter) => {
    const idMatch = item.url.match(/\/([0-9]*)\/$/);
    const id = idMatch ? idMatch[1] : 'unknown';
    return {
      id,
      name: item.name,
      description: item.birth_year,
      image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
      age: item.birth_year,
      height: item.height,
      mass: item.mass,
      gender: item.gender,
      films: item.films,
    };
  });

  return {
    props: {
      searchResults,
      searchTerm: String(searchTerm),
      currentPage: Number(page),
      totalPages: Math.ceil(data.count / 10),
    },
  };
};

export default Main;
