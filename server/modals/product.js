const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  data: {type:Object}
});

const seedData = async () => {
  await product.insertMany([
    { name: 'John Doe', age: 30, occupation: 'Engineer' },
    { name: 'Jane Smith', age: 25, occupation: 'Designer' },
    { name: 'Sam Brown', age: 28, occupation: 'Developer' }
  ]);
};
const Product = mongoose.model('Product', productSchema,'products');

module.exports = Product;
