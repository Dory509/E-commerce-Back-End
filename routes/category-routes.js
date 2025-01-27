const router = require('express').Router();
const { Category, Product } = require('../../models');

// Get all categories with associated products
router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll({ include: Product });
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a category by ID (uncomment if you want to use it)
router.get('/:id', async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id, { include: Product });
        if (!category) {
            res.status(404).json({ message: 'Category not found' });
            return;
        }
        res.json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new category
router.post('/', async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a category by ID
router.put('/:id', async (req, res) => {
    try {
        const updated = await Category.update(req.body, { where: { id: req.params.id } });
        if (!updated[0]) {
            res.status(404).json({ message: 'Category not found' });
            return;
        }
        res.json({ message: 'Category updated' });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a category by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Category.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            res.status(404).json({ message: 'Category not found' });
            return;
        }
        res.json({ message: 'Category deleted' });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;