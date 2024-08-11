'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../context/ThemeContext';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import Details from '../Details/Details';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import Flyout from '../Flyout/Flyout';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { setSearchTerm } from '../../slices/searchSlice';
import styles from '../../styles/index.module.css';
import { Character, MainClientProps } from 'src/types/interfaces';

const MainClient: React.FC<MainClientProps> = ({
  searchTerm,
  page,
  searchResults,
  totalPages,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { theme } = useTheme();

  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<
    Character | undefined
  >(undefined);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : 'light';
  }, [theme]);

  useEffect(() => {
    setLoading(false);
    const id = new URLSearchParams(window.location.search).get('id');
    setSelectedId(id);

    if (id) {
      const character = searchResults.find((character) => character.id === id);
      setSelectedCharacter(character);
    }
  }, [searchResults]);

  const handleSearch = (term: string) => {
    dispatch(setSearchTerm(term.trim()));
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
    setCurrentPage(page);
    router.push(`/?searchTerm=${searchTerm}&page=${page}`);
  };

  const currentBackgroundImage =
    theme === 'dark'
      ? '/images/star-wars-background-vdgqv4b95q9ur6ak.jpg'
      : '/images/1625667391_7-kartinkin-com-p-zvezdnie-voini-oboi-krasivie-8.jpg';

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

export default MainClient;
