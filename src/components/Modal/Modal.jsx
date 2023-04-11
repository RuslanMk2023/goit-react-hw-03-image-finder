import { Component } from 'react';

import styles from './Modal.module.css';

export class Modal extends Component {
  pressedEsc = event => event.key === 'Escape' && this.props.closeModal();

  componentDidMount() {
    document.addEventListener('keydown', this.pressedEsc, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressedEsc, false);
  }

  render() {
    const {
      modalState: { largeImageURL },
      closeModal,
    } = this.props;

    return (
      <div
        id="modal-overlay"
        onClick={() => closeModal()}
        className={styles.overlay}
      >
        <div className={styles.modal}>
          <img src={largeImageURL} alt="modal-img" />
        </div>
      </div>
    );
  }
}