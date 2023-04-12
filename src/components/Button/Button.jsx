import PropTypes from 'prop-types';

import styles from './Button.module.css';

export const Button = ({ onClick, tittle }) => (
  <section className={styles.buttonWrapper}>
    <button onClick={() => onClick('MORE')} className={styles.button}>
      {tittle}
    </button>
  </section>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  tittle: PropTypes.string.isRequired,
};