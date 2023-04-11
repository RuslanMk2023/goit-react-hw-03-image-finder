import axios from 'axios';

// https://pixabay.com/api/?q=cat&page=1&key=35263439-f91ab84eb139bac32c923ef32&image_type=photo&orientation=horizontal&per_page=12

const API_URL = 'https://pixabay.com/api/';
const PIXIBAY_KEY = '35263439-f91ab84eb139bac32c923ef32';
axios.defaults.baseURL = API_URL;

export const getImagesFromPixabay = async (pageCounter, searchText = '') => {
  const response = await axios.get(
    `?q=${searchText}&page=${pageCounter}&key=${PIXIBAY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return filteredResponse(response.data.hits);
};

export function filteredResponse(response) {
  return response.map(({ id, webformatURL, largeImageURL }) => ({
    id,
    webformatURL,
    largeImageURL,
  }));
}

export default {
  getImagesFromPixabay,
};