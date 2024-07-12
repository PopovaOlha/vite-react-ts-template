import { useState, useEffect, useCallback, useRef } from 'react';
import { Character } from '../types/interfaces';
import fetchSearchResults from '../api/api';

const useSearch = () => {
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchTermRef = useRef<string | null>(null);

  const saveToLocalStorage = (term: string) => {
    localStorage.setItem('searchTerm', term);
  };

  const performSearch = useCallback((term: string) => {
    setIsLoading(true);
    fetchSearchResults(term)
      .then((results) => {
        setSearchResults(results);
        setSearchTerm(term);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
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

  return { searchResults, searchTerm, performSearch, isLoading, setIsLoading };
};

export default useSearch;
