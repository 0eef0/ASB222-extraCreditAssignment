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
    "Neanderthals resided in caves and did not have permanent settlements, as they had to follow wherever gave them food.",
    "Neanderthals were part of the 99% of generations of Hunter-Gatherers. This means that they were reliant of tools and had to find their own food",
    "The technology Neanderthals are most known for are their stone tools. However, their stone tools were far more advanced than those who came before them, as they had more precise techniques to get more out of their stones",
    "Neandethals often used cave paintings to communicate things, such as dangerous animals, food, and tools."
];
const modernInfo = [
    "Many modern humans have permanent settlements in large urban and suburban areas.",
    "Modern humans are in the 1% of generations that have the boon of modern food, meaning they're readily availible and likely processed.",
    "Modern society revolved around growing technology, the biggest development being the internet. Things like the internet drastically increase human capability.",
    "Modern humans use a wide variety of languages to communicate their thoughts and ideas."
];
const neanderthalImg = [
    './assets/neanderthal1.jpg',
    './assets/neanderthal2.jpg',
    './assets/neanderthal3.jpg',
    './assets/neanderthal4.jpg'
];
const modernImg = [
    './assets/modern1.jpg',
    './assets/modern2.jpg',
    './assets/modern3.jpg',
    './assets/modern4.jpg'
];

const changeInfo = (index) => {
    document.getElementById('neanderthalInfo').textContent = neanderthalInfo[index];
    document.getElementById('modernInfo').textContent = modernInfo[index];
    document.getElementById('neanderthalImg').src = neanderthalImg[index];
    document.getElementById('modernImg').src = modernImg[index];
} 
changeInfo(0);