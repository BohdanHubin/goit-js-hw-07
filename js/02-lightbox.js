import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');


function createGalleryMarkap(item) {
   
    return item.map(({ preview, original, description }) => {
       return `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`
    }).join('')
};

const allGalleryMarkap = createGalleryMarkap(galleryItems);

galleryRef.innerHTML =allGalleryMarkap

new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionDelay:250,});


