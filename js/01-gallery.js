import { galleryItems } from './gallery-items.js';
// Change code below this line
const containerEl = document.querySelector('.gallery');
console.log(galleryItems);

galleryItems.forEach(item => {
  console.log(item);
  const div = document.createElement('div');
  div.classList.add('gallery__item');
  div.innerHTML = `
  <a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
  `;
  containerEl.append(div);
})
let instance;
  containerEl.addEventListener('click', e => {
  console.log(e);
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  console.log(e.target.src);
  instance = basicLightbox.create(`
  <img src='${e.target.src}'/>
`);
  instance.show();
});

