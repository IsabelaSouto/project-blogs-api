const route = require('express').Router();
const loginController = require('../controllers/login.controller');
const validateLogin = require('../middlewares/validate.login');

route.post('/', validateLogin, loginController.login);

module.exports = route;