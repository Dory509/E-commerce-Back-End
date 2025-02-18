const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../models');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({ include: [Category, { model: Tag, through: ProductTag }] });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, { include: [Category, { model: Tag, through: ProductTag }] });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.update(req.body, { where: { id: req.params.id } });
    if (!product[0]) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product updated successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a product
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;