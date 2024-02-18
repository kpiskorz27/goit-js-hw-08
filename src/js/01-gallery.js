import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryElement = document.querySelector('.gallery');

const imagesElement = galleryItems
  .map(
    item =>
      `<li>
      <a class="gallery__item" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a></li>`
  )
  .join('');

galleryElement.insertAdjacentHTML('afterbegin', imagesElement);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
