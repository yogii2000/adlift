const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  data: {type:Object}
});

const Product = mongoose.model('Product', productSchema,'products');

module.exports = Product;
