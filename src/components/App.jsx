import { Component } from 'react';

import {
  ImageGallery,
  Loader,
  Modal,
  Searchbar,
  Button,
  ErrorMessege,
} from 'components';

import { getImagesFromPixabay } from 'api/getImagesFromPixabay';

import styles from './App.module.css';

export class App extends Component {
  state = {
    imgsFromApi: [],
    isLoading: false,
    error: null,
    pageCounter: 0,
    searchText: '',
    modalState: { isShow: false, largeImageURL: '' },
  };

  componentDidUpdate(_,prevState) {
    const { pageCounter, searchText } = this.state;
    const shouldUpdateFromApi =
      prevState.pageCounter !== pageCounter || prevState.searchText !== searchText;

    if (shouldUpdateFromApi) {
      this.getImgFromApi(this.state.searchText);
      window.scrollTo(0, document.body.scrollHeight);
    }
  }

  openModal = largeImageURL =>
    this.setState({
      modalState: { isShow: true, largeImageURL: largeImageURL },
    });

  closeModal = () =>
    this.setState({ modalState: { isShow: false, imgsID: '' } });

  loadMore = () => this.setState(state =>( {pageCounter: state.pageCounter + 1 }));

  getSearch = searchText => {
    if (this.state.searchText !== searchText)
      this.setState({ imgsFromApi: [], searchText, pageCounter: 1 });
  };

  getImgFromApi = async searchText => {
    const { isLoading, pageCounter} = this.state;

    if (isLoading) return;
    this.setState({ isLoading: true });

    try {
      const newImgData = await getImagesFromPixabay(pageCounter, searchText);
      this.setState(state => ({ imgsFromApi: [...state.imgsFromApi, ...newImgData] }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { imgsFromApi, isLoading, error, modalState } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar getSearch={this.getSearch} />

        {error && <ErrorMessege error={error} />}

        {imgsFromApi.length > 0 && (
          <ImageGallery imgsFromApi={imgsFromApi} openModal={this.openModal} />
        )}

        {isLoading 
          ? <Loader />
          : imgsFromApi.length > 0 && (
              <Button onClick={this.loadMore} tittle={'Load more'} />
            )}

        {modalState.isShow && (
          <Modal
            largeImageURL={modalState.largeImageURL}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}
