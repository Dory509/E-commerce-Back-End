const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'On Sale',
  },
  {
    tag_name: 'New Arrival',
  },
  {
    tag_name: 'Bestseller',
  },
  {
    tag_name: 'Limited Edition',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;