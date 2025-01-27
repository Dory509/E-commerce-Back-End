const router = require('express').Router();
const { Tag, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({ include: Product });
    res.json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, { include: Product });
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Tag.update(req.body, { where: { id: req.params.id } });
    if (!updated[0]) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.json({ message: 'Tag updated' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Tag.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      res.status(404).json({ message: 'Tag not found' });
      return;
    }
    res.json({ message: 'Tag deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;