import { Component } from 'react';
import PropTypes from 'prop-types';

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

ImageGalleryItem.propTypes = {
  imgData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};