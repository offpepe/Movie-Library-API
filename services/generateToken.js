const jwt = require('jsonwebtoken');

module.exports = async (type) => {
  const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256'
  }
  const token = jwt.sign({ type }, secret, jwtConfig);
  return token;
}