const { User } = require('../models');

const getUserEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async (userData) => {
  const user = await User.create(userData);
  return user;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return allUsers;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

module.exports = {
  getUserEmail,
  createUser,
  getAllUsers,
  getUserById,
};