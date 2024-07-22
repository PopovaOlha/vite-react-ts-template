import * as React from 'react';
import styles from './SearchResults.module.css';
import Card from '../Card/Card';
import { Character } from '../../types/interfaces';

interface SearchResultsProps {
  results: Character[];
  onItemClick: (id: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  onItemClick,
}) => {
  if (results.length === 0) {
    return <p>No cards available</p>;
  }

  return (
    <div className={styles.searchResults}>
      <h2>Search Results</h2>
      <div className={styles.cardContainer}>
        {results.map((result) => (
          <Card
            key={result.id}
            character={result}
            onClick={() => onItemClick(result.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
