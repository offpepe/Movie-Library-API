const usersModel = require('../models/users');
const generateToken = require('./generateToken');

const createUser = async (username, email, password) => {
  const op = await usersModel.createUser(username, email, password);
  return op;
}

const loginUser = async (email, password) => {
  const user = await usersModel.loginUser(email, password);
  const token = await generateToken(email, password);
  if (!user) return false;
  const { username } = user;
  const response = {
    success: 'login_successfully',
    code: 202,
    message: `Login de ${username} feito com sucesso!`,
    token,
  }
  return response;
}

module.exports = {
    createUser,
    loginUser,
}
