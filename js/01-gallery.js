import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

const gallaryItem = galleryItems.map(({preview, original, description}) => 
`<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`)
        .join("");
    
gallery.insertAdjacentHTML("beforeend", gallaryItem);
// console.log(gallaryItem);

gallery.addEventListener('click', onImageOpen);

function onImageOpen (event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    };

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
`, {
        onShow: (instance) => {
            document.addEventListener('keydown', onEscPress);
        },
        onClose: (instance) => {
            document.removeEventListener('keydown', onEscPress)
        },
    }
    );
        
    instance.show()
    

document.addEventListener('keydown', onEscPress);

function onEscPress(event) {
    if (event.code === "Escape") {
        instance.close();
        document.removeEventListener('keydown', onEscPress);
    }
}

}