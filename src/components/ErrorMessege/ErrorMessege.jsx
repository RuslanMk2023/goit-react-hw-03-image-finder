import PropTypes  from 'react';

import styles from './ErrorMessege.module.css';

export const ErrorMessege = ({error}) => (
  <p className={styles.errorMessege}>
    Whoops, something went wrong: {error.message}
  </p>
);


ErrorMessege.propTypes = {
  error: PropTypes.any
};