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
let numberItem = document.querySelector('.counter__number');
let cartCounter = document.querySelector('.cart__counter');

let counter = 0;
let price = 125;

//function to update the quantity and total price
function updateQuantity() {
    numberItem.textContent = counter;
    cartCounter.textContent = counter;
    //Calculate the total price
    // let totalPrice = price * counter;
    // console.log(totalPrice);
}
// Event listener for the decrement button
substructItem.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        updateQuantity();
    }
});

// Event listener for the increment button
addItem.addEventListener('click', () => {
    counter++;
    updateQuantity();
});

// Initial update
updateQuantity();







