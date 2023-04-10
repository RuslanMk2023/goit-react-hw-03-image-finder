import { Component } from 'react';

import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  render() {
    return <li className={styles.imageGalleryItem}>
    <img className={styles.imageGalleryItem_image} src="" alt="" />
  </li>;
  }
}
