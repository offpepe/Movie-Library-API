const usersService = require('../services/users');

const STATUS = require('../services/httpStatus');
const ERROR = require('../error/messages');

const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateNewUserData = async (req, res, next) => {
  const { username, email, type, password } = req.body;
  if(!username || !email || !type || !password)
    return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.someFieldEmpty);
  if(!pattern.test(email))
    return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.emailNotValid);
  if(username.length < 5 || password.length < 8)
    return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.usernameOrPasswordInvalid);
  next()
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const { result: user } = await usersService.getUserByEmail(email);
  if (user) return res.status(STATUS.ERROR.NOT_ACCEPTABLE).json(ERROR.emailAlreadyExist);
  next();
};

const validateLoginData = async (req, res, next) => {
  const { email, password } = req.body;
  if(!email || !password)
    return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.someFieldEmpty);
  if(!pattern.test(email))
    return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.emailOrPasswordInvalid);
  next()
};

const validateEmailParam = async (req, res, next) => {
  const { email } = req.params
  if(!pattern.test(email))
    return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.emailNotValid);
  next();
}

const validateResetData = async (req, res, next) => {
  const { email, password } = req.body;
  const { result: user } = await usersService.getUserByEmail(email);
  if (!user) return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.emailNotValid);
  if (!email || !password)
  return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.someFieldEmpty);
  if (password.length < 8)
    return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.invalidPassword);
  next()
}

module.exports = {
    validateNewUserData,
    validateEmail,
    validateLoginData,
    validateEmailParam,
    validateResetData,
}