import { useState, useEffect, useCallback, useRef } from 'react';
import { Character } from '../types/interfaces';
import fetchSearchResults from '../api/api';
import { useNavigate, useLocation } from 'react-router-dom';

const useSearch = () => {
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const location = useLocation();

  const searchTermRef = useRef<string | null>(null);

  const saveToLocalStorage = (term: string) => {
    localStorage.setItem('searchTerm', term);
  };

  const performSearch = useCallback((term: string, page: number = 1) => {
    setIsLoading(true);
    fetchSearchResults(term, page)
      .then((results) => {
        setSearchResults(results);
        setSearchTerm(term);
        setCurrentPage(page);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const loadFromLocalStorage = useCallback(() => {
    const savedTerm = localStorage.getItem('searchTerm');
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get('page') || '1', 10);
    if (savedTerm) {
      setSearchTerm(savedTerm);
      searchTermRef.current = savedTerm;
      performSearch(savedTerm, page);
    } else {
      performSearch('', page);
    }
  }, [location.search, performSearch]);

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

  const handlePageChange = (page: number) => {
    navigate(`?page=${page}`);
    performSearch(searchTerm, page);
  };

  return {
    searchResults,
    searchTerm,
    performSearch,
    isLoading,
    setIsLoading,
    currentPage,
    handlePageChange,
  };
};

export default useSearch;
