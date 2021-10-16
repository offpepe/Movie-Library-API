const STATUS = require('../services/httpStatus');
const ERROR = require('../error/messages');
const usersService = require('../services/users');

const createUser = async (req, res) => {
  const { username, email, type, password } = req.body;
  const op = await usersService.createUser(username, email, type, password);
  return res.status(STATUS.SUCCESS.CREATED).json(op);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const data = await usersService.loginUser(email, password);
  if (!data) return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.emailOrPasswordInvalid);
  return res.status(STATUS.SUCCESS.ACCEPTED).json(data);
}

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  const user = await usersService.getUserByEmail(email);
  if (!user) return res.status(STATUS.SUCCESS.NO_CONTENT).json({
    result: null
  });
  return res.status(STATUS.SUCCESS.OK).json(user);
}

const resetPassword = async (req, res) => {
  const { email, password } = req.body
  const op = await usersService.resetPassword(email, password);
  if (!user) return res.status(STATUS.ERROR.NOT_ACCEPTABLE).json(ERROR.emailNotValid);
  return res.status(STATUS.SUCCESS.OK).json(op)
}

module.exports = {
    createUser,
    loginUser,
    getUserByEmail,
    resetPassword,
};