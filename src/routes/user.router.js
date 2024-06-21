const route = require('express').Router();
const userController = require('../controllers/user.controller');
const createUserController = require('../controllers/create.user.controller');
const validateUser = require('../middlewares/validate.user');
const validateToken = require('../middlewares/validate.token');

route.get('/', validateToken, userController.getAllUsers);
route.get('/:id', validateToken, userController.getUserById);

route.post('/', validateUser, createUserController.createUser);

module.exports = route;