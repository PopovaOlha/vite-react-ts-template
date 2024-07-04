import React, { Component } from 'react';
import styles from './Search.module.css';

interface Props {
  onSearch: (searchTerm: string) => void;
}

interface State {
  searchTerm: string;
}

class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {
    const savedTerm = localStorage.getItem('searchTerm');
    if (savedTerm) {
      this.setState({ searchTerm: savedTerm });
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSearch = () => {
    const { searchTerm } = this.state;
    const trimmedSearchTerm = searchTerm.trim();
    localStorage.setItem('searchTerm', trimmedSearchTerm);
    this.props.onSearch(trimmedSearchTerm);
  };

  render() {
    return (
      <div className={styles.search}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder="Enter search term..."
          className={styles.input}
        />
        <button onClick={this.handleSearch} className={styles.button}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;