const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

module.exports = async (type) => {
  const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256'
  }
  const secret = await fs.readFile('./secret','utf-8');
  const token = jwt.sign({ type }, secret, jwtConfig);
  const rawTokens = await fs.readFile('./assets/tokens.json', 'utf-8');
  const tokens = JSON.parse(rawTokens);
  tokens.push(token);
  await fs.writeFile('./assets/tokens.json', JSON.stringify(tokens),'utf-8');
  return token;
}