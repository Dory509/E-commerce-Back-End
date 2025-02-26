const { Product } = require('../models');

const productData = [
  {
    product_name: 'Smartphone',
    price: 699.99,
    stock: 50,
    category_id: 1,
  },
  {
    product_name: 'T-Shirt',
    price: 19.99,
    stock: 200,
    category_id: 2,
  },
  {
    product_name: 'Vacuum Cleaner',
    price: 129.99,
    stock: 30,
    category_id: 3,
  },
  {
    product_name: 'Science Fiction Novel',
    price: 14.99,
    stock: 100,
    category_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;