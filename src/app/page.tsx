'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useTheme } from '../context/ThemeContext';
import Search from '../components/Search/Search';
import SearchResults from '../components/SearchResults/SearchResults';
import Details from '../components/Details/Details';
import Loader from '../components/Loader/Loader';
import Pagination from '../components/Pagination/Pagination';
import Flyout from '../components/Flyout/Flyout';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import { setCurrentPage, setSearchTerm } from '../slices/searchSlice';
import { fetchData } from '../utils/fetchData';
import styles from '../styles/index.module.css';
import { Character, MainProps } from 'src/types/interfaces';

const Page: React.FC<MainProps> = ({ currentPage }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const [searchResults, setSearchResults] = useState<Character[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);
  const searchTerm = searchParams.get('searchTerm') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchData(searchTerm, page);
        setSearchResults(data.searchResults);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [searchTerm, page]);

  const handleSearch = (term: string) => {
    dispatch(setSearchTerm(term.trim()));
    dispatch(setCurrentPage(1));
    router.push(`/?searchTerm=${term.trim()}&page=${page}`);
  };

  const handleItemClick = (id: string) => {
    router.push(`/?searchTerm=${searchTerm}&page=${currentPage}&id=${id}`);
  };

  const handleLeftSectionClick = () => {
    const selectedId = searchParams.get('id');
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

  const selectedId = searchParams.get('id');
  const selectedCharacter = searchResults.find(
    (character) => character.id === selectedId,
  );

  return (
    <>
      <ThemeToggle />
      <div
        className={`${styles.main} ${theme === 'dark' ? styles.dark : styles.light}`}
        style={{ backgroundImage: `url(${currentBackgroundImage})` }}
      >
        <div className={styles.topSection}>
          <Search onSearch={handleSearch} searchTerm={searchTerm} />
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.leftSection} onClick={handleLeftSectionClick}>
            {loading ? (
              <Loader />
            ) : (
              <>
                <SearchResults
                  results={searchResults}
                  onItemClick={handleItemClick}
                />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  searchTerm={searchTerm}
                />
              </>
            )}
            ;
          </div>
          {selectedId && (
            <div className={styles.rightSection}>
              {selectedCharacter ? (
                <Details character={selectedCharacter} id={selectedId} />
              ) : (
                <div>Character not found</div>
              )}
            </div>
          )}
        </div>
        <Flyout />
      </div>
    </>
  );
};

export default Page;
