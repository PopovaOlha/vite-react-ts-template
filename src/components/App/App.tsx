import { Component } from 'react';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorFallback from '../ErrorFallback/ErrorFallback';
import ErrorTestButton from '../ErrorTestButton/ErrorTestButton';
import { APICharacter, Character, State } from '../../types/interfaces';
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

  performSearch = (searchTerm: string) => {
    let apiUrl = 'https://swapi.dev/api/people/?page=1';
    if (searchTerm) {
      apiUrl = `https://swapi.dev/api/people/?search=${searchTerm}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const results = data.results.map((item: APICharacter) => {
          const idMatch = item.url.match(/\/([0-9]*)\/$/);
          const id = idMatch ? idMatch[1] : 'unknown';
          return {
            name: item.name,
            description: item.birth_year,
            image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
            age: item.birth_year,
          };
        });
        this.setState(
          { searchResults: results, searchTerm: searchTerm },
          () => {
            this.saveToLocalStorage(searchTerm, results);
          },
        );
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  handleSearch = (searchTerm: string) => {
    this.performSearch(searchTerm.trim());
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
          this.performSearch(savedTerm);
        },
      );
    } else {
      this.performSearch('');
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
