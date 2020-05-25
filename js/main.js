"use strict";

// Задание 2
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(i + " – это ноль ");
    } else if ((i % 2) == 0) {
        console.log(i + " – четное число ");
    } else {
        console.log(i + " – не четное число ");
    }
}

// Задание 3

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 4

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(item => {
    let discount = 15;
    let result = item.price / 100 * discount;
    let priceWithDiscount = item.price - result
    console.log(item.price);
    console.log(priceWithDiscount);
});

//Задание 5
const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithPhotos = products2.filter(item => "photos" in item && item.photos.length > 0);

console.log(productsWithPhotos);

const sorted = products2.sort((item1, item2) => {
   return item1.price - item2.price;
});

console.log(sorted);

// Задание 6

for(let i = 0; i < 10; console.log(i++)) {
}

// Задание 7

for(let x = 'x'; x.length < 21; x += 'x') {
    console.log(x);
}