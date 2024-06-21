const { Category } = require('../models');

const createCategory = async (categoryData) => {
  const category = await Category.create(categoryData);
  return category;
};

module.exports = {
  createCategory,
};