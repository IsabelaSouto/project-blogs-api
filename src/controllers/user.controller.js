const userService = require('../services/login.service');

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  const { displayName, email, image } = user;
  return res.status(200).json({ id: user.id, displayName, email, image });
};

module.exports = {
  getAllUsers,
  getUserById,
};