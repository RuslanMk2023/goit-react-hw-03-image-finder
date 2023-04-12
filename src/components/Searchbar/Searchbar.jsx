import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

export const Searchbar = ({ searchText, setSearchText, getImgsFromApi }) => (
  <header className={styles.searchbar}>
    <form className={styles.searchForm}>
      <button
        type="button"
        className={styles.searchForm_button}
        onClick={() => getImgsFromApi('SEARCH')}
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

Searchbar.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  getImgsFromApi: PropTypes.func.isRequired,
};