import { Component } from 'react';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import styles from './App.module.css';

interface Character {
  name: string;
  description: string;
  image: string;
  age: string;
}

interface State {
  searchResults: Character[];
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }

  componentDidMount() {
    this.performSearch('');
  }

  performSearch = (searchTerm: string) => {
    let apiUrl = 'https://swapi.dev/api/people/?page=1';
    if (searchTerm) {
      apiUrl = `https://swapi.dev/api/people/?search=${searchTerm}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const results = data.results.map((item: any) => ({
          name: item.name,
          description: item.birth_year,
          image: `https://starwars-visualguide.com/assets/img/characters/${item.url.match(/\/([0-9]*)\/$/)[1]}.jpg`,
          age: item.birth_year,
        }));
        this.setState({ searchResults: results });
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  handleSearch = (searchTerm: string) => {
    this.performSearch(searchTerm);
  };

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.topSection}>
          <Search onSearch={this.handleSearch} />
        </div>
        <div className={styles.bottomSection}>
          <SearchResults results={this.state.searchResults} />
        </div>
      </div>
    );
  }
}

export default App;