const categories = [
    'Settlements',
    'Diet',
    'Technology',
    'Communication'
];
categories.forEach((category, index) => {
    document.getElementById('btnPanel').innerHTML += `<button onmousedown="changeInfo(${index})">${category}</button>`
});

const neanderthalInfo = [
    1,
    2,
    3,
    4
];
const modernInfo = [
    1,
    2,
    3,
    4
];
const neanderthalImg = [
    './assets/neanderthal1.jpg',
    './assets/neanderthal1.jpg',
    './assets/neanderthal1.jpg',
    './assets/neanderthal1.jpg'
];
const modernImg = [
    './assets/modern1.jpg',
    './assets/modern1.jpg',
    './assets/modern1.jpg',
    './assets/modern1.jpg'
];

const changeInfo = (index) => {
    document.getElementById('neanderthalInfo').textContent = neanderthalInfo[index];
    document.getElementById('modernInfo').textContent = modernInfo[index];
    document.getElementById('neanderthalImg').src = neanderthalImg[index];
    document.getElementById('modernImg').src = modernImg[index];
} 
changeInfo(0);