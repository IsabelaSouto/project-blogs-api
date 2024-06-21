const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mySecretJWT';

const validateToken = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded.payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;