const data = {
  products: [
    {
      id: 1,
      title: "iPhone 13",
      price: 999,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "iPhone 11",
      price: 400,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://m.media-amazon.com/images/I/715HCLsOHbL._AC_SL1500_.jpg",
    },
    {
      id: 3,
      title: "Samsung S22",
      price: 799,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail:
        "https://m.media-amazon.com/images/I/710CgnRkXWL._AC_SL1500_.jpg",
    },
    {
      id: 4,
      title: "Samsung S21",
      price: 599,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.3,
      stock: 123,
      brand: "Samsung",
      category: "smartphones",
      thumbnail:
        "https://m.media-amazon.com/images/I/81lBoZhSRGL._AC_SL1500_.jpg",
    },
    {
      id: 5,
      title: "Airpods Max",
      price: 449,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.09,
      stock: 32,
      brand: "Apple",
      category: "headphones",
      thumbnail:
        "https://m.media-amazon.com/images/I/81fSoQd7nsL._AC_SL1500_.jpg",
    },
    {
      id: 6,
      title: "Sony WH-1000XM5",
      price: 398,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.57,
      stock: 83,
      brand: "Sony",
      category: "headphones",
      thumbnail:
        "https://m.media-amazon.com/images/I/41vlBpJGnIL._AC_SL1500_.jpg",
    },
    {
      id: 7,
      title: "Sony WH1000XM4",
      price: 348,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.25,
      stock: 50,
      brand: "Sony",
      category: "headphones",
      thumbnail:
        "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    },
    {
      id: 8,
      title: "Bose 700",
      price: 379,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.43,
      stock: 68,
      brand: "Dell",
      category: "Bose",
      thumbnail:
        "https://m.media-amazon.com/images/I/51BcwAyqVZL._AC_SL1200_.jpg",
    },

    {
      id: 10,
      title: "Bose SoundLink II",
      price: 179,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      discountPercentage: 6.18,
      rating: 4.43,
      stock: 89,
      brand: "Bose",
      category: "headphones",
      thumbnail:
        "https://m.media-amazon.com/images/I/71jDdUuRi8L._AC_SL1500_.jpg",
    },
    {
      id: 11,
      title: "PlayStation 5",
      price: 499,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.26,
      stock: 65,
      brand: "PlayStation",
      category: "videogames",
      thumbnail:
        "https://m.media-amazon.com/images/I/61gimpyy0UL._AC_SL1500_.jpg",
    },
    {
      id: 12,
      title: "Xbox Series X",
      price: 499,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4,
      stock: 52,
      brand: "Xbox",
      category: "videogames",
      thumbnail:
        "https://m.media-amazon.com/images/I/61eYoSqkHnL._AC_SL1200_.jpg",
    },
    {
      id: 13,
      title: "Nintendo Switch",
      price: 299,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.59,
      stock: 61,
      brand: "Nintendo",
      category: "videogames",
      thumbnail:
        "https://m.media-amazon.com/images/I/61i421VnFYL._AC_SL1201_.jpg",
    },
    {
      id: 14,
      title: "Xbox Series S",
      price: 289,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.21,
      stock: 114,
      brand: "Xbox",
      category: "videogames",

      thumbnail:
        "https://m.media-amazon.com/images/I/81VdHXDp6bL._AC_SL1500_.jpg",
    },
    {
      id: 15,
      title: "PlayStation 4",
      price: 200,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.7,
      stock: 105,
      brand: "PlayStation",
      category: "videogames",
      thumbnail:
        "https://m.media-amazon.com/images/I/61n-yWHcmSS._AC_SL1500_.jpg",
    },
  ],
  total: 100,
  skip: 0,
  limit: 30,
};

export default data;
