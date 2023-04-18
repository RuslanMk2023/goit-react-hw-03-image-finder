import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './Searchbar.module.css';

export class Searchbar extends Component {
  submitHandler = evn => {
    evn.preventDefault();
    const form = evn.currentTarget;
    const searchStr = form.elements.searchStr.value;
    this.props.getSearch(searchStr);
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.submitHandler}>
          <button type="submit" className={styles.searchForm_button}>
            <span className={styles.searchForm_button__label}>Search</span>
          </button>

          <input
            className={styles.searchForm_button__input}
            name="searchStr"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  getSearch: PropTypes.func.isRequired,
};