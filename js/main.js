
let thumbnailImages = document.querySelectorAll('.product__thumb img');
let productImage = document.querySelector('.product__img');

// Add click event listeners to each thumbnail image
thumbnailImages.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        productImage.src = `/images/image-product-${index + 1}.jpg`;
        productImage.alt = thumbnail.alt;
    });
});





