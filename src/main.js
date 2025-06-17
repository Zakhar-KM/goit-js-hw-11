import { fetchImages } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements.searchQuery.value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  fetchImages(query, 1)
    .then(data => {
      hideLoader();

      if (data.hits.length === 0) {
        showNoResultsToast();
        return;
      }

      createGallery(data.hits);
      form.reset();
    })
    .catch(error => {
      hideLoader();
      console.log('Ошибка при загрузке картинок:', error);
    });
});

function showNoResultsToast() {
  iziToast.warning({
    title: 'Oops!',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    timeout: 3000,
  });
}
