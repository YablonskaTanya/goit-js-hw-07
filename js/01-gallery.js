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
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src= ${preview} 
      data-source= ${original}
      alt="${description}"
    />
  </a>
</div>
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

  const dataSourseImg = e.target.getAttribute("data-source");
  console.log(dataSourseImg);

  const modalWindow = basicLightbox.create(
    `
  		<img width="1400" height="900" src="${dataSourseImg}">
  	`
  );
  modalWindow.show();

  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(e) {
    if (e.code === "Escape") {
      modalWindow.close();
      window.removeEventListener("keydown", onEscKeyPress);
    }
  }
}
