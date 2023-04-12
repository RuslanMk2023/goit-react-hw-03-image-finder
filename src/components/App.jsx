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
    searchText: '',
    modalState: { isShow: false, largeImageURL: '' },
  };

  async componentDidMount() {
    this.getImgsFromApi('INIT');
  }

  setSearchText = evn => this.setState({ searchText: evn.target.value });

  openModal = largeImageURL =>
    this.setState({
      modalState: { isShow: true, largeImageURL: largeImageURL },
    });

  closeModal = () =>
    this.setState({ modalState: { isShow: false, imgsID: '' } });

  getImgsFromApi = async type => {
    const { imgsFromApi, pageCounter, isLoading, searchText } = this.state;
    if (!isLoading) {
      this.setState({ isLoading: true });
      try {
        const newImgData = await getImagesFromPixabay(pageCounter, searchText);

        if (type === 'INIT') this.setState({ imgsFromApi: newImgData });
        if (type === 'SEARCH') this.setState({ imgsFromApi: newImgData, pageCounter: 1 });
        if (type === 'MORE') this.setState({imgsFromApi: [...imgsFromApi, ...newImgData],pageCounter: pageCounter + 1});

      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  render() {
    const { imgsFromApi, isLoading, error, searchText, modalState } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar
          searchText={searchText}
          setSearchText={this.setSearchText}
          getImgsFromApi={this.getImgsFromApi}
        />

        {error && <ErrorMessege error={error} />}

        {imgsFromApi.length > 0 && <ImageGallery imgsFromApi={imgsFromApi} openModal={this.openModal} />}

        {isLoading 
          ? <Loader />
          : <Button onClick={this.getImgsFromApi} tittle={'Load more'} />}

        {modalState.isShow && 
          <Modal
            largeImageURL={modalState.largeImageURL}
            closeModal={this.closeModal}
          />}
      </div>
    );
  }
}