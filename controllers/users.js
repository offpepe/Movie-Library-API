const STATUS = require('../services/httpStatus');
const usersService = require('../services/users');

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  const op = await usersService.createUser(username, email, password);
  return res.status(STATUS.SUCCESS.CREATED).json(op);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const data = await usersService.loginUser(email, password);
  if (!data) res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json({ message: 'in progress' });
  res.status(STATUS.SUCCESS.ACCEPTED).json(data);
}

module.exports = {
    createUser,
    loginUser,
};