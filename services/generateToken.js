const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

module.exports = async (type) => {
  const secret = await fs.readFile('./secret','utf-8');
  const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256'
  }
  const token = jwt.sign({ type }, secret, jwtConfig);
  return token;
}