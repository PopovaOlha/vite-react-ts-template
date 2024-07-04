export interface Props {
  results: { name: string; description: string; image: string; age: string }[];
}

export interface Character {
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
}

export interface CardProps {
  name: string;
  description: string;
  image: string;
  age: string;
}

export interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

export interface SearchState {
  searchTerm: string;
}
