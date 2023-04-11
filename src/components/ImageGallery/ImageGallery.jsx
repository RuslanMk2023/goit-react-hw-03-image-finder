import { Component } from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from './ImageGalleryItem';

import styles from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    const { imgsFromApi, openModal } = this.props;
    return (
      <ul key={this.propspage} className={styles.imageGallery}>
        {imgsFromApi.length > 0 &&
          imgsFromApi.map((imgData, index) => (
            <ImageGalleryItem
              imgData={imgData}
              key={index}
              openModal={openModal}
            />
          ))}
      </ul>
    );
  }
}

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