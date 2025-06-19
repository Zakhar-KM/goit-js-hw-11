import { fetchImages } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showNoResultsToast,
} from './js/render-functions.js';

const form = document.getElementById('search-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  fetchImages(query, 1)
    .then(data => {
      if (data.hits.length === 0) {
        showNoResultsToast();
        return;
      }

      createGallery(data.hits);
      form.reset();
    })
    .catch(error => {
      console.log('Помилка при завантаженні:', error);
    })
    .finally(() => {
      hideLoader();
    });
});
