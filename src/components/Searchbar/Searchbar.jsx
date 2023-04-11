import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

{
  /* Accepted values: backgrounds, fashion, nature, science, education, 
    feelings, health, people, religion, places, animals, industry, computer,
    food, sports, transportation, travel, buildings, business, music */
}

export class Searchbar extends Component {
  render() {
    const { searchText, setSearchText, getImgsFromApi } = this.props;

    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm}>
          <button
            type="button"
            className={styles.searchForm_button}
            onClick={() => getImgsFromApi('SEARCH_REQUEST')}
          >
            <span className={styles.searchForm_button__label}>Search</span>
          </button>

          <input
            className={styles.searchForm_button__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={evn => setSearchText(evn)}
            value={searchText}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  getImgsFromApi: PropTypes.func.isRequired,
};