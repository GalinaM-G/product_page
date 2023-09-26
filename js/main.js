//Switching the large product image by clicking on the small thumbnail images


let thumbnailImages = document.querySelectorAll('.product__thumb img');
let productImage = document.querySelector('.product__img');

// Add click event listeners to each thumbnail image
thumbnailImages.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        productImage.src = `/images/image-product-${index + 1}.jpg`;
        productImage.alt = thumbnail.alt;
    });
});


//Counter for a product item and cart

let substructItem = document.querySelector('.counter__substract');
let addItem = document.querySelector('.counter__add');
let numberItem = document.querySelector('.counter__number').value;

let cartCounter = document.querySelector('.cart__counter');

let addToCartButton = document.querySelector('.product__btn');

numberItem = 0;

function updateInputField() {
    document.querySelector('.counter__number').value = numberItem;
}

// Initial update
updateInputField();

addItem.addEventListener('click', () => {
    numberItem++;
    updateInputField();
});

substructItem.addEventListener('click', () => {
    if (numberItem > 0) {
        numberItem--;
        updateInputField();
    }
});


addToCartButton.addEventListener('click', () => {
    cartCounter.style.display = "block";
    cartCounter.textContent = numberItem;

    document.querySelector('.counter__number').value = 0;
    
})






