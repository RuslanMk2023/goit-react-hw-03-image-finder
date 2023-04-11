import { Component } from 'react';

import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    const {
      imgData: { id, webformatURL, largeImageURL },
      openModal,
    } = this.props;

    return (
      <li key={id} className={styles.imageGalleryItem}>
        <img
          className={styles.imageGalleryItem_image}
          onClick={() => openModal(largeImageURL)}
          src={webformatURL}
          alt={`img-${id}`}
        />
      </li>
    );
  }
}
