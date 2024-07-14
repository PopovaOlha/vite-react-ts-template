export interface Props {
  results: { name: string; description: string; image: string; age: string }[];
}

export interface Character {
  id: string;
  name: string;
  description: string;
  image: string;
  age: string;
}

export interface APICharacter {
  name: string;
  birth_year: string;
  url: string;
}

export interface State {
  searchResults: Character[];
  searchTerm: string;
  isInitialLoad: boolean;
  isLoading: boolean;
}

export interface CardProps {
  name: string;
  description: string;
  image: string;
  age: string;
  onClick: () => void;
}

export interface SearchProps {
  onSearch: (searchTerm: string) => void;
  searchTerm: string;
}

export interface SearchState {
  searchTerm: string;
}

export default interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
