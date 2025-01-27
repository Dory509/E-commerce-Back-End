const router = require('express').Router();
const { Product, Category, Tag } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({ include: [Category, Tag] });
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, { include: [Category, Tag] });
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.update(req.body, { where: { id: req.params.id } });
    if (!updated[0]) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json({ message: 'Product updated' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;