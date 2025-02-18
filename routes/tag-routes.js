const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../models');

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({ include: [{ model: Product, through: ProductTag }] });
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a tag by ID
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, { include: [{ model: Product, through: ProductTag }] });
    if (!tag) return res.status(404).json({ message: 'Tag not found' });
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.json(tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a tag
router.put('/:id', async (req, res) => {
  try {
    const tag = await Tag.update(req.body, { where: { id: req.params.id } });
    if (!tag[0]) return res.status(404).json({ message: 'Tag not found' });
    res.json({ message: 'Tag updated successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a tag
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Tag.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: 'Tag not found' });
    res.json({ message: 'Tag deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;