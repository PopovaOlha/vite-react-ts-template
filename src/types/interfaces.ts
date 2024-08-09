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
  isSelected?: boolean;
}

export interface APICharacter {
  id: string;
  name: string;
  birth_year: string;
  url: string;
  description: string;
  image: string;
  age: string;
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
  id: string;
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
  characterDetails: Character | null;
  resultsByPage: { [page: number]: Character[] };
  results: Character[];
}

export default interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  searchTerm: string;
}

export interface SearchResponse {
  results: Character[];
  count: number;
}

export interface DetailsProps {
  character: Character;
}

export interface MainProps {
  searchResults: Character[];
  searchTerm: string;
  currentPage: number;
  totalPages: number;
  character: Character;
}

export interface SearchState {
  searchResults: Character[];
  searchTerm: string;
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ServerSideProps {
  searchResults: Character[];
  searchTerm: string;
  currentPage: number;
  totalPages: number;
}

export interface DetailsClientProps {
  character: Character;
  id: string;
}

export const defaultCharacter: Character = {
  id: '1',
  name: 'Luke Skywalker',
  description: 'A Jedi Knight',
  image: 'https://starwars-visualguide.com/assets/img/characters/1.jpg',
  age: '19',
  height: '1.72m',
  mass: '77kg',
  gender: 'male',
  films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
};
