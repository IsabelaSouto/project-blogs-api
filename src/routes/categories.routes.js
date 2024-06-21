const route = require('express').Router();
const categoryController = require('../controllers/categories.controller');
const validateToken = require('../middlewares/validate.token');

route.post('/', validateToken, categoryController.createCategory);

module.exports = route;