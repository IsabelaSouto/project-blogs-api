const { Category } = require('../models');

const createCategory = async (categoryData) => {
  const category = await Category.create(categoryData);
  return category;
};

const getAllCategories = async () => {
  const categories = await Category.findAll({
    attributes: ['id', 'name'],
  });
  return categories;
};

module.exports = {
  createCategory,
  getAllCategories,
};