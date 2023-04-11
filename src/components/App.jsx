import { Component } from 'react';

import { ImageGallery, Loader, Modal, Searchbar, Button } from 'components';

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
    this.getImgsFromApi('DID_MOUNT_INIT');
  }

  setSearchText = evn => {
    this.setState({ searchText: evn.target.value });
  };

  openModal = largeImageURL => {
    this.setState({
      modalState: { isShow: true, largeImageURL: largeImageURL },
    });
  };

  closeModal = () => {
    this.setState({ modalState: { isShow: false, imgsID: '' } });
  };

  //type --->'LOAD_MORE', 'SEARCH_REQUEST', 'DID_MOUNT_INIT'
  getImgsFromApi = async type => {
    const { pageCounter, imgsFromApi, isLoading, searchText } = this.state;

    if (!isLoading) {
      this.setState({ isLoading: true });
      try {
        const newImgData = await getImagesFromPixabay(pageCounter, searchText);

        switch (type) {
          case 'DID_MOUNT_INIT':
            this.setState({ imgsFromApi: newImgData });
            break;
          case 'SEARCH_REQUEST':
            this.setState({ imgsFromApi: newImgData, pageCounter: 1 });
            break;
          case 'LOAD_MORE':
            this.setState({
              imgsFromApi: [...imgsFromApi, ...newImgData],
              pageCounter: pageCounter + 1,
            });
            break;
          default:
            throw new Error(`Unknown type: ${type}`);
        }
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  render() {
    const { imgsFromApi, isLoading, error, searchText, modalState } =
      this.state;

    return (
      <div className={styles.App}>
        <Searchbar
          searchText={searchText}
          setSearchText={this.setSearchText}
          getImgsFromApi={this.getImgsFromApi}
        />

        {error && (
          <p className={styles.errorMessege}>
            Whoops, something went wrong: {error.message}
          </p>
        )}

        {imgsFromApi.length > 0 && (
          <ImageGallery imgsFromApi={imgsFromApi} openModal={this.openModal} />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <Button onClick={this.getImgsFromApi} tittle={'Load more'} />
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
