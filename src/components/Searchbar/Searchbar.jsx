import { Component } from 'react';

import styles from './Searchbar.module.css';

export class Searchbar extends Component {
  render() {
    return (
      <header class="searchbar">
        <div className={styles.searchForm}>
          <form class="form">
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </div>
      </header>
    );
  }
}
