export interface Props {
  results: { name: string; description: string; image: string; age: string }[];
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
}

export interface APICharacter {
  id: string;
  name: string;
  birth_year: string;
  url: string;
  description: string; // Assuming this is the birth year or some other description
  image: string;
  age: string; // Assuming this is the birth year or some other age-related info
  height: string;
  mass: string;
  gender: string;
  films: string[];
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
  searchTerm: string;
}

export interface SearchState {
  searchResults: Character[];
  searchTerm: string;
  isLoading: boolean;
  currentPage: number;
}
