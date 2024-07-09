import { Component } from 'react';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../ErrorFallback/ErrorFallback';
import ErrorTestButton from '../ErrorTestButton/ErrorTestButton';
import { Character, State } from '../../types/interfaces';
import { performSearch } from '../../api/api';
import styles from './App.module.css';

class App extends Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      searchResults: [],
      searchTerm: '',
      isInitialLoad: true,
    };
  }

  componentDidMount() {
    this.loadFromLocalStorage();
  }

  handleSearch = (searchTerm: string) => {
    performSearch(searchTerm.trim())
      .then((results) => {
        this.setState(
          { searchResults: results, searchTerm: searchTerm.trim() },
          () => {
            this.saveToLocalStorage(searchTerm, results);
          },
        );
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  saveToLocalStorage = (searchTerm: string, results: Character[]) => {
    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem('searchResults', JSON.stringify(results));
  };

  loadFromLocalStorage = () => {
    const savedTerm = localStorage.getItem('searchTerm');
    const savedResults = localStorage.getItem('searchResults');
    if (savedTerm && savedResults) {
      this.setState(
        {
          searchResults: JSON.parse(savedResults),
          searchTerm: savedTerm,
          isInitialLoad: false,
        },
        () => {
          this.handleSearch(savedTerm);
        },
      );
    } else {
      this.handleSearch('');
    }
  };

  render() {
    return (
      <div className={styles.app}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className={styles.topSection}>
            <Search
              onSearch={this.handleSearch}
              searchTerm={this.state.searchTerm}
            />
          </div>
          <div className={styles.bottomSection}>
            <SearchResults results={this.state.searchResults} />
          </div>
          <ErrorTestButton />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
