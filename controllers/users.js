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
  console.log(req.body);
  const data = await usersService.loginUser(email, password);
  if (!data) return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.emailOrPasswordInvalid);
  return res.status(STATUS.SUCCESS.ACCEPTED).json(data);
}

module.exports = {
    createUser,
    loginUser,
};