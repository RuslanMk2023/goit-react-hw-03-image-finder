import { ImageGallery, Loader, Modal, Searchbar, Button } from 'components';

import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.App}>
      <Searchbar />
      {/* <Loader /> */}
      <ImageGallery />
      {/* <Modal /> */}
      <Button/>
    </div>
  );
};