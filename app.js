const wrapper = document.querySelector('.slider-wrapper');
const navItems = document.querySelectorAll('.nav__item');
let currentProductImage = document.querySelector('.product__img');
let currentProductName = document.querySelector('.product__name');
let currentProductPrice = document.querySelector('.product__price');
let currentProductColors = document.querySelectorAll('.product__color');
let currentProductSizes = document.querySelectorAll('.product__size');
const buyProductBtn = document.querySelector('.product__btn');
const appModal = document.querySelector('.app__modal');
const paymentModal = document.querySelector('.payment-modal');
const closeModalBtn = document.querySelector('.payment-modal__close-btn');


const products = [
    {
        id: 1,
        name: 'Air Force',
        price: 119,
        colors: [
            {
                code: 'black',
                img: './assets/img/air.png'
            },
            {
                code: 'darkblue',
                img: './assets/img/air2.png'
            }
        ]
    },
    {
        id: 2,
        name: 'Air Jordan',
        price: 149,
        colors: [
            {
                code: 'lightgray',
                img: './assets/img/jordan.png',
            },
            {
                code: 'lightblue',
                img: './assets/img/jordan2.png',
            },
        ],
    },
    {
        id: 3,
        name: 'Blazer',
        price: 109,
        colors: [
            {
                code: 'lightgray',
                img: './assets/img/blazer.png',
            },
            {
                code: 'green',
                img: './assets/img/blazer2.png',
            },
        ],
    },
    {
        id: 4,
        name: 'Crater',
        price: 129,
        colors: [
            {
                code: 'black',
                img: './assets/img/crater.png',
            },
            {
                code: 'lightgray',
                img: './assets/img/crater2.png',
            },
        ],
    },
    {
        id: 5,
        name: 'Hippie',
        price: 99,
        colors: [
            {
                code: 'gray',
                img: './assets/img/hippie.png',
            },
            {
                code: 'black',
                img: './assets/img/hippie2.png',
            },
        ],
    },
]

let choosenProduct = products[0];


navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        
        // change the choosen product color
        navItems.forEach((item) => {
            item.style.color = "lightgray";
            item.style.borderBottom = 'none';
        });
        item.style.color = "white";
        item.style.borderBottom = '3px solid white';

        // change the choosen product
        choosenProduct = products[index];

        // change the product text
        currentProductName.textContent = choosenProduct.name;
        currentProductPrice.textContent = '$' + choosenProduct.price;
        currentProductImage.src = choosenProduct.colors[0].img;

        // assign new product color
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImage.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


buyProductBtn.addEventListener('click', () => {
    appModal.style.display = 'block';
    paymentModal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    paymentModal.style.display = 'none';
    appModal.style.display = 'none';
});

appModal.addEventListener('click', () => {
    paymentModal.style.display = 'none';
    appModal.style.display = 'none';
});

paymentModal.addEventListener('click', (event) => { 
    event.stopPropagation();
});