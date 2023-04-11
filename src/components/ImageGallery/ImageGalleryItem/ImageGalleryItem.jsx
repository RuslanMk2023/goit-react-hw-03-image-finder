import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({imgData: { id, webformatURL, largeImageURL },openModal,}) => (
  <li key={id} className={styles.imageGalleryItem}>
    <img
      className={styles.imageGalleryItem_image}
      onClick={() => openModal(largeImageURL)}
      src={webformatURL}
      alt={`img-${id}`}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  imgData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};
