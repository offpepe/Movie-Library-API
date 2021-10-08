const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

module.exports = async (email, username) => {
  const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256'
  }
  const secret = await fs.readFile('./secret','utf-8');
  const token = jwt.sign({ email, username }, secret, jwtConfig);
  await fs.writeFile('./assets/tokens', token,'utf-8');
  return token;
}