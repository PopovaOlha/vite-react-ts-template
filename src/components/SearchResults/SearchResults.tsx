import React from 'react';
import styles from './SearchResults.module.css';
import Card from '../Card/Card';
import { Character } from '../../types/interfaces';

interface SearchResultsProps {
  results: Character[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <div className={styles.searchResults}>
      <h2>Search Results</h2>
      <div className={styles.cardContainer}>
        {results.map((result, index) => (
          <Card
            key={index}
            name={result.name}
            description={result.description}
            image={result.image}
            age={result.age}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
