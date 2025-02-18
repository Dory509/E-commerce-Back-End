const router = require('express').Router();
const { Category, Product } = require('../models');

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [Product] });
    res.json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a category by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, { include: [Product] });
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.json(category);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a category
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, { where: { id: req.params.id } });
    if (!category[0]) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category updated successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a category
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;