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

// let substructItem = document.querySelector('.counter__substract');
// let addItem = document.querySelector('.counter__add');
// let numberItem = document.querySelector('.counter__number');
// let cartCounter = document.querySelector('.cart__counter');
// let cartButton = document.querySelector('.product__btn');

// let counter = 0;
// let price = 125;

// //function to update the quantity and total price
// function renderCart() {
//     numberItem.textContent = counter;


   


//     //Calculate the total price
//     // let totalPrice = price * counter;
//     // console.log(totalPrice); add to modal cart later
// }
//  cartButton.addEventListener('click', () => {
       
//         let counterModal = counter;

//         cartCounter.textContent = counterModal;
    
//     })

// // Event listener for the decrement button
// substructItem.addEventListener('click', () => {
//     if (counter > 0) {
//         counter--;
//         renderCart();
//     }
// });

// // Event listener for the increment button
// addItem.addEventListener('click', () => {
//     counter++;
//     renderCart();
// });

// // Initial update
// renderCart();



    // Get references to the counter elements
    const subtractButton = document.querySelector('.counter__subtract');
    const addButton = document.querySelector('.counter__add');
    const numberInput = document.querySelector('.counter__number');

    // Add a click event listener to the subtract button
    subtractButton.addEventListener('click', () => {
        // Parse the current value of the input field as an integer
        let currentValue = +numberInput.value ;

        // Ensure the value is greater than 0 before decrementing
        if (currentValue > 0) {
        currentValue--;
    numberInput.value = currentValue;
        }
    });

    // Add a click event listener to the add button
    addButton.addEventListener('click', () => {
        // Parse the current value of the input field as an integer
        let currentValue = parseInt(numberInput.value);

    // Increment the value
    currentValue++;
    numberInput.value = currentValue;
    });






