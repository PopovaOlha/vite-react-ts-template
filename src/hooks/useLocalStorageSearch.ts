import { useState, useEffect, useCallback, useRef } from 'react';
import { Character } from '../types/interfaces';
import fetchSearchResults from '../api/api';

const useSearch = () => {
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const searchTermRef = useRef<string | null>(null);

  const saveToLocalStorage = (term: string) => {
    localStorage.setItem('searchTerm', term);
  };

  const performSearch = useCallback((term: string) => {
    fetchSearchResults(term)
      .then((results) => {
        setSearchResults(results);
        setSearchTerm(term);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const loadFromLocalStorage = useCallback(() => {
    const savedTerm = localStorage.getItem('searchTerm');
    if (savedTerm) {
      setSearchTerm(savedTerm);
      searchTermRef.current = savedTerm;
      performSearch(savedTerm);
    } else {
      performSearch('');
    }
  }, [performSearch]);

  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  useEffect(() => {
    return () => {
      if (searchTermRef.current) {
        saveToLocalStorage(searchTermRef.current);
      }
    };
  }, []);

  useEffect(() => {
    searchTermRef.current = searchTerm;
  }, [searchTerm]);

  return { searchResults, searchTerm, performSearch };
};

export default useSearch;
