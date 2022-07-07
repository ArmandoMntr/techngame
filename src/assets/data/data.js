const data = {
  products: [
    {
      id: 1,
      title: "iPhone X",
      price: 899,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      images: "https://dummyjson.com/image/i/products/2/1.jpg",
    },
    {
      id: 2,
      title: "iPhone 9",
      price: 549,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: "https://dummyjson.com/image/i/products/1/1.jpg",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      price: 1249,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/3/thumbnail.jpg",
      images: "https://dummyjson.com/image/i/products/3/1.jpg",
    },
    {
      id: 4,
      title: "OPPOF19",
      price: 280,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
      images: "https://dummyjson.com/image/i/products/4/1.jpg",
    },
    {
      id: 5,
      title: "Huawei P30",
      price: 499,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/5/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/5/1.jpg",
        "https://dummyjson.com/image/i/products/5/2.jpg",
        "https://dummyjson.com/image/i/products/5/3.jpg",
      ],
    },
    {
      id: 6,
      title: "MacBook Pro",
      price: 1749,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.57,
      stock: 83,
      brand: "APPle",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png",
      images: [
        "https://dummyjson.com/image/i/products/6/1.png",
        "https://dummyjson.com/image/i/products/6/2.jpg",
        "https://dummyjson.com/image/i/products/6/3.png",
        "https://dummyjson.com/image/i/products/6/4.jpg",
      ],
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      price: 1499,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/7/1.jpg",
        "https://dummyjson.com/image/i/products/7/2.jpg",
        "https://dummyjson.com/image/i/products/7/3.jpg",
        "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
      ],
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      price: 1499,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.43,
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/8/1.jpg",
        "https://dummyjson.com/image/i/products/8/2.jpg",
        "https://dummyjson.com/image/i/products/8/3.jpg",
        "https://dummyjson.com/image/i/products/8/4.jpg",
        "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
      ],
    },
    {
      id: 9,
      title: "Infinix INBOOK",
      price: 1099,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.54,
      stock: 96,
      brand: "Infinix",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/9/1.jpg",
        "https://dummyjson.com/image/i/products/9/2.png",
        "https://dummyjson.com/image/i/products/9/3.png",
        "https://dummyjson.com/image/i/products/9/4.jpg",
        "https://dummyjson.com/image/i/products/9/thumbnail.jpg",
      ],
    },
    {
      id: 10,
      title: "HP Pavilion 15-DK1056WM",
      price: 1099,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      discountPercentage: 6.18,
      rating: 4.43,
      stock: 89,
      brand: "HP Pavilion",
      category: "laptops",
      thumbnail: "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
      images: [
        "https://dummyjson.com/image/i/products/10/1.jpg",
        "https://dummyjson.com/image/i/products/10/2.jpg",
        "https://dummyjson.com/image/i/products/10/3.jpg",
        "https://dummyjson.com/image/i/products/10/thumbnail.jpeg",
      ],
    },
    {
      id: 11,
      title: "Kirby",
      price: 13,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.26,
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      category: "videogames",
      thumbnail:
        "https://m.media-amazon.com/images/I/81kfvGfF+SL._AC_SY741_.jpg",
    },
    {
      id: 12,
      title: "Mario Kart 8",
      price: 40,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4,
      stock: 52,
      brand: "Nintendo",
      category: "videogames",
      thumbnail:
        "https://m.media-amazon.com/images/I/71zMv5+rx5S._AC_SY741_.jpg",
    },
    {
      id: 13,
      title: "Animal Crossing",
      price: 13,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.59,
      stock: 61,
      brand: "Fog Scent Xpressio",
      category: "videogames",
      thumbnail:
        "https://m.media-amazon.com/images/I/71EsARfsklS._AC_SY741_.jpg",
    },
    {
      id: 14,
      title: "Pokemon Arceus",
      price: 120,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.21,
      stock: 114,
      brand: "Nintendo",
      category: "videogames",

      thumbnail:
        "https://m.media-amazon.com/images/I/71CEYxAqqHL._AC_SX679_.jpg",
    },
    {
      id: 15,
      title: "Super Smash Bros",
      price: 30,
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      rating: 4.7,
      stock: 105,
      brand: "Nintendo",
      category: "videogames",
      thumbnail:
        "https://m.media-amazon.com/images/I/81qzH0RY3DS._AC_SY741_.jpg",
    },
  ],
  total: 100,
  skip: 0,
  limit: 30,
};

export default data;
