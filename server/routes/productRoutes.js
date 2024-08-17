const express = require('express');
const Product = require('../modals/product');

const router = express.Router();

// Route to add a new product
router.post('/add', async (req, res) => {
  const  {name,data}  = req.body;
  try {
    const newProduct = new Product({
      name,
      data:JSON.parse(data)
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add product', error });
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve products', error });
  }
});

module.exports = router;
