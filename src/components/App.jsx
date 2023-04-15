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
    pageCounter: 1,
    prevSearchText: '',
    modalState: { isShow: false, largeImageURL: '' },
  };

  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  openModal = largeImageURL => this.setState({   modalState: { isShow: true, largeImageURL: largeImageURL }, });

  closeModal = () => this.setState({ modalState: { isShow: false, imgsID: '' } });

  getApiImg_Search = async (searchText) => {
    const { isLoading, prevSearchText } = this.state;

    if (prevSearchText === searchText ) return;
    if (isLoading) return;

    this.setState({ isLoading: true });

    try {
      const imgsFromApi = await getImagesFromPixabay(1, searchText);
      this.setState({imgsFromApi, pageCounter: 2, prevSearchText: searchText });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
  };


  getApiImg_LoadMore = async () => {
    const { imgsFromApi, pageCounter, isLoading, prevSearchText } = this.state;

    if (isLoading) return;
    this.setState({ isLoading: true })

    try {
      const newImgData = await getImagesFromPixabay(pageCounter, prevSearchText);
      this.setState({  imgsFromApi: [...imgsFromApi, ...newImgData],  pageCounter: pageCounter + 1});
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
  };

  render() {
    const { imgsFromApi, isLoading, error, modalState } =
      this.state;

    return (
      <div className={styles.App}>
        <Searchbar getApiImg_Search={this.getApiImg_Search}  />

        {error && <ErrorMessege error={error} />}

        {imgsFromApi.length > 0 && <ImageGallery imgsFromApi={imgsFromApi} openModal={this.openModal} />}

        {isLoading 
          ? <Loader />
          : imgsFromApi.length > 0 && <Button onClick={this.getApiImg_LoadMore} tittle={'Load more'} />}

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
