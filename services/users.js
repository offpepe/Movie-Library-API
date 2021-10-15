const md5 = require('crypto-js/md5')
const usersModel = require('../models/users');
const generateToken = require('./generateToken');

const createUser = async (username, email, type, password) => {
  const op = await usersModel.createUser(username, email, type, password);
  const { insertedId } = op;
  return { success: 'account created', type, email, insertedId };
}

const loginUser = async (email, password) => {
  const user = await usersModel.loginUser(email, password);
  if (!user) return false;
  const { username, type } = user;
  const token = await generateToken(type);
  return {
    success: 'login_successfully',
    code: 202,
    message: `Login de ${username} feito com sucesso!`,
    token,
  };
}

const getUserByEmail = async (email) => {
  const user = await usersModel.getUserByEmail(email);
  if (!user) return false 
  const hash = md5(email).toString();
  return { result: { email: user.email, username: user.username, emailHash: hash  } };
}

module.exports = {
    createUser,
    loginUser,
    getUserByEmail,
}
