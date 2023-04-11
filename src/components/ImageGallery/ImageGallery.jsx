import PropTypes from 'prop-types';

import { ImageGalleryItem } from './ImageGalleryItem';

import styles from './ImageGallery.module.css';

export const ImageGallery = ({ imgsFromApi, openModal }) => (
  <ul className={styles.imageGallery}>
    {imgsFromApi.map((imgData, index) => (
      <ImageGalleryItem imgData={imgData} key={index} openModal={openModal} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  imgsFromApi: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};