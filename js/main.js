//Mobile menu

let burgerBtn = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu__item');

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('mobile');
    burgerBtn.classList.toggle('mobile');
    document.body.classList.toggle('lock');
})

menuItem.forEach(link => {
    link.addEventListener("click", () => {
        burgerBtn.classList.remove('mobile');
        menu.classList.remove('mobile');
        document.body.classList.remove('lock');
    });
});


//Switch the large product image by clicking on the small thumbnail images
let productImage = document.querySelector('.product__img');
let thumbnailImages = document.querySelectorAll('.product__thumb');

function switchImg(thumbImgs, mainImg) {
    thumbImgs.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            mainImg.src = `/images/image-product-${index + 1}.jpg`;
            mainImg.alt = `image of product ${index + 1}`;

            thumbImgs.forEach(thumb => {
                thumb.classList.remove('active');
            });

            thumbnail.classList.add('active');
        });
    });
}

switchImg(thumbnailImages, productImage);

//Switch the large product image by clicking on the arrows
let count = 0;
function switchImgbyNextArrow(imgs, img) {
    if (count + 1 < imgs.length) {
        count++;
    } else {
        count = 0;
    }

    imgs.forEach((item) => {
        item.classList.remove('active');
    });

    imgs[count].classList.add('active');
    img.src = `/images/image-product-${count + 1}.jpg`;
}

function switchImgbyPrevArrow(imgs, img) {
    if (count - 1 >= 0) {
        count--;
    } else {
        count = imgs.length - 1;
    }

    imgs.forEach((item) => {
        item.classList.remove('active');
    });

    imgs[count].classList.add('active');
    img.src = `/images/image-product-${count + 1}.jpg`;
}

let prevBtn = document.querySelector('.product__prev');
let nextBtn = document.querySelector('.product__next');

nextBtn.addEventListener('click', function () {
    switchImgbyNextArrow(thumbnailImages, productImage);
});
prevBtn.addEventListener('click', function () {
    switchImgbyPrevArrow(thumbnailImages, productImage);
});


//Lightbox gallery
let lightbox = document.querySelector('.lightbox');
let lightboxClose = document.querySelector('.lightbox__close');

let lightboxImages = document.querySelectorAll('.lightbox__thumb');
let lightboxImage = document.querySelector('.lightbox__img');

let lPrevBtn = document.querySelector('.lightbox__prev');
let lNextBtn = document.querySelector('.lightbox__next');

productImage.addEventListener('click', () => {
    lightbox.style.display = 'block';
})


lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
})

//Switch the large product image by clicking on the small thumbnail images
switchImg(lightboxImages, lightboxImage);


//Switch the large product image by clicking on the arrows
lNextBtn.addEventListener('click', function () {
    switchImgbyNextArrow(lightboxImages, lightboxImage);
});
lPrevBtn.addEventListener('click', function () {
    switchImgbyPrevArrow(lightboxImages, lightboxImage);
});



//Counter for a product item and cart
let substructItem = document.querySelector('.counter__substract');
let addItem = document.querySelector('.counter__add');
let numberItem = document.querySelector('.counter__number').value;

let cartCounter = document.querySelector('.cart__counter');
let addToCartButton = document.querySelector('.counter__btn');

let totalItemsInCart = 0; // Initialize the total items in the cart
let actualPrice = 125.00.toFixed(2);
let totalPrice = 0.00;

function updateInputField() {
    document.querySelector('.counter__number').value = numberItem;
}

function updateCartCounter() {
    cartCounter.textContent = totalItemsInCart;
}

function calcTotal() {
    totalPrice = (actualPrice * totalItemsInCart).toFixed(2);
}

// Initial update
updateInputField();
updateCartCounter(); // Update the cart counter initially


// Adding or substructing in the counter 
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

//Add event listeners for the Enter key on increment and decrement buttons
addItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        numberItem++;
        updateInputField();
    }
});

substructItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && numberItem > 0) {
        numberItem--;
        updateInputField();
    }
});

// Add to the cart button functionality 
addToCartButton.addEventListener('click', () => {
    if (numberItem > 0) {
        cartCounter.style.display = "block";
        totalItemsInCart += numberItem; // Add the selected items to the total cart items
        updateCartCounter(); // Update the cart counter
        calcTotal();
    }
    document.querySelector('.counter__number').value = 0;
    numberItem = 0;
});


//Cart rendering 
let cartModal = document.querySelector('.cart-modal');
let cartIcon = document.querySelector('.cart');
let cartContent = document.querySelector('.cart-modal__content');
let deleteIcon;

// Function to close the cart modal
function closeCart() {
    cartModal.classList.remove('show');
}

//Event listener to close cart when clicking anywhere on the document
document.addEventListener('click', (event) => {
    // Check if the click target is not within the cart modal
    if (!cartModal.contains(event.target)) {
        closeCart();
    }
});


function renderEmptyCart() {
    let emptyCartContent = document.createElement('p');
    emptyCartContent.classList.add('cart-modal__empty');
    emptyCartContent.textContent = 'Your cart is empty.';
    cartContent.innerHTML = '';
    cartContent.append(emptyCartContent);
}

//Event listener on the cart icon to show number of items added,to show modal with empty or with added items and to delete items in the cart---//
cartIcon.addEventListener('click', (event) => {
    event.stopPropagation();

    cartModal.classList.toggle('show');

    if (totalItemsInCart > 0) {

        cartContent.innerHTML =
            `<div class="cart-modal__info">
                <img class="cart-modal__img" src="/images/image-product-1.jpg" alt="photo of sneakers">
                <div>
                    <div>Fall Limited Edition Sneakers</div>
                        <div>
                            <span class="cart-modal__price">
                                <span class="currency">&#36;</span>${actualPrice}
                            </span>
                            x ${totalItemsInCart}
                            <span class="cart-modal__total">
                                <span class="currency">&#36;</span>${totalPrice}
                            </span>
                        </div>
                    </div>
                <span class="sr-only">Delete items</span>
                <button class="delete">
                    <svg >
                        <use xlink:href="images/icons.svg#delete"></use>
                    </svg>
                </button>
            </div>
            <a class="btn" href="#">Check out</a>`;

        // Event listener for removing an item from the cart
        deleteIcon = document.querySelector('.delete');
        deleteIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            renderEmptyCart();

            totalItemsInCart = 0;
            cartCounter.style.display = "none";

        });
    }
    else {
        renderEmptyCart();
    }
});


























