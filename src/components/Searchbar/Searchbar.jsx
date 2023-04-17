import PropTypes from 'prop-types';
import React, { Component } from 'react';

import styles from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchText: '',
    prevSearchText: '',
  };

  inputRef = React.createRef();

  componentDidMount() {
    const input = this.inputRef.current;
    input.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    const input = this.inputRef.current;
    input.removeEventListener('keydown', this.handleKeyDown);
  }
  
  setSearchText = text => this.setState({ searchText: text });

  submitHandler = evn => {
    evn.preventDefault();
    this.props.getApiImg_Search(this.state.searchText);
  };

  handleKeyDown = evn => (evn.key === 'Enter') && this.submitHandler(evn);

  render() {
    const { searchText } = this.state;

    return (
      <header className={styles.searchbar}>
        <form className={styles.searchForm} onSubmit={this.submitHandler}>
          <button type="submit" className={styles.searchForm_button}>
            <span className={styles.searchForm_button__label}>Search</span>
          </button>

          <input
            className={styles.searchForm_button__input}
            ref={this.inputRef}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={evn => this.setSearchText(evn.target.value)}
            value={searchText}
            onKeyDown={this.handleKeyDown}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  getApiImg_Search: PropTypes.func.isRequired,
};