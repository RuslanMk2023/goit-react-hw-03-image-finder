import { Component } from 'react';
import { MoonLoader } from 'react-spinners';

import styles from './Loader.module.css';

export class Loader extends Component {
  render() {
    return (
      <section className={styles.loaderWrapper}>
        <MoonLoader color={'#3685FD'} loading={true} size={60} />;
      </section>
    );
  }
}
