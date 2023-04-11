import { MoonLoader } from 'react-spinners';

import styles from './Loader.module.css';

export const Loader = () => (
  <section className={styles.loaderWrapper}>
    <MoonLoader color={'#3685FD'} loading={true} size={60} />;
  </section>
);
