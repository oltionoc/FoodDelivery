//Review Section

const reviews = [
    {
        id: 1,
        name: 'Frank',
        img: './photos/frank5.jpeg',
        text: 'My order was delivered on time and food was hot and fresh. Driver was super nice and great personality.'
    },
    {
        id: 2,
        name: 'Kendrick',
        img: './photos/kendrick.webp',
        text: 'Excellent!!! First-class!  The driver was early, and the food was hot! Thank you!'
    },
    {
        id: 3,
        name: 'Mac',
        img: './photos/mac.jpeg',
        text: 'Love FoodZone, been using them for Over five years no problems.'
    },
    {
        id: 3,
        name: 'Travis',
        img: './photos/travis2.jpeg',
        text: 'I ordered from FoodZone, and the driver was early, my food was hot, and I will order from them again! Good customer service!'
    },
    {
        id: 4,
        name: 'Arian',
        img: './photos/arian.jpg',
        text: 'Always pleased with the service and convenience from FoodZone.'
    }
]

const img = document.getElementById("person-img");
const author = document.getElementById('author');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
