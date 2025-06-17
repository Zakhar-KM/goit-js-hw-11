import axios from 'axios';

const API_KEY = '50872380-a1850de8631dfd470b651c05b';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query, page = 1, perPage = 9) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
