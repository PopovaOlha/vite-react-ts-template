'use client';

import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSearchTerm } from '../../slices/searchSlice';
import { SearchProps } from '../../types/interfaces';
import styles from './Search.module.css';

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const [localSearchTerm, setLocalSearchTerm] =
    React.useState<string>(searchTerm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setSearchTerm(localSearchTerm));
    onSearch(localSearchTerm);
  };

  React.useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.search}>
        <input
          type="text"
          value={localSearchTerm}
          onChange={handleChange}
          placeholder="Search..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
