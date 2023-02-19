import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galerryImage = document.querySelector(".gallery__item");
const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
      `;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryCardsMarkup);

galleryContainer.addEventListener("click", onPaletteContainerClick);

function onPaletteContainerClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  let gallery = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
  });
}
