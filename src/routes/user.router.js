const route = require('express').Router();
const userController = require('../controllers/user.controller');
const createUserController = require('../controllers/create.user.controller');
const validateUser = require('../middlewares/validate.user');

route.get('/', validateUser, userController.getAllUsers);
route.get('/:id', validateUser, userController.getUserById);

route.post('/', validateUser, createUserController.createUser);

module.exports = route;