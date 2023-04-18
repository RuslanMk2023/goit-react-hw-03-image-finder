import { BeatLoader} from 'react-spinners';

import styles from './Loader.module.css';

export const Loader = () => (
  <section className={styles.loaderWrapper}>
    <BeatLoader color={'#58D68D'} loading={true} size={20} />
  </section>
);
