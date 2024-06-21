const Joi = require('joi');
const categoriesService = require('../services/categories.service');

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { error } = categorySchema.validate({ name });
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const newCategory = await categoriesService.createCategory({ name });
  return res.status(201).json(newCategory);
};

module.exports = {
  createCategory,
};