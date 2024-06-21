const userService = require('../services/login.service');
const createToken = require('../auth/createToken');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const userExist = await userService.getUserEmail(email);
  if (userExist) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const newUser = await userService.createUser({ displayName, email, password, image });

  const newUserInfo = { 
    id: newUser.id,
    displayName: newUser.displayName,
    email: newUser.email,
    image: newUser.image,
  };

  const token = createToken(newUserInfo);

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};