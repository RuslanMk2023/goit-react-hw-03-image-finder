import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

export class Button extends Component {
  render() {
    const { onClick, tittle } = this.props;
    return (
      <section className={styles.buttonWrapper}>
        <button onClick={() => onClick('LOAD_MORE')} className={styles.button}>
          {tittle}
        </button>
      </section>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  tittle: PropTypes.string.isRequired,
};