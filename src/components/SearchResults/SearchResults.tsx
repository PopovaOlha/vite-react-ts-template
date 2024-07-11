import { Component } from 'react';
import styles from './SearchResults.module.css';
import Card from '../Card/Card';
import { Props } from '../../types/interfaces';

class SearchResults extends Component<Props> {
  render() {
    const { results } = this.props;
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
  }
}

export default SearchResults;
