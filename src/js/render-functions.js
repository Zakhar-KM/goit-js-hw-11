import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function createGallery(images) {
  const galleryContainer = document.getElementById('gallery');

  const markup = images
    .map(
      image => `
      <a class="gallery__item" href="${image.largeImageURL}">
        <div class="photo-card">
          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
          <div class="info">
            <p><b>Likes:</b> ${image.likes}</p>
            <p><b>Views:</b> ${image.views}</p>
            <p><b>Comments:</b> ${image.comments}</p>
            <p><b>Downloads:</b> ${image.downloads}</p>
          </div>
        </div>
      </a>
    `
    )
    .join('');

  galleryContainer.innerHTML = markup;

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}

export function clearGallery() {
  document.getElementById('gallery').innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader-container').classList.remove('hidden');
}

export function hideLoader() {
  document.querySelector('.loader-container').classList.add('hidden');
}
export function showNoResultsToast() {
  iziToast.warning({
    title: 'Oops!',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    timeout: 3000,
  });
}
