const STATUS = require('../services/httpStatus');
const ERROR = require('../error/messages');
const fs = require('fs').promises;

const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateNewUserData = async (req, res, next) => {
  const { username, email, password } = req.body;
  if(!username || !email || !password)
    return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.someFieldEmpty);
  if(!pattern.test(email))
    return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.emailNotValid)
  if(username.length < 5 || password.length < 8)
    return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.usernameOrPasswordInvalid);
  next()
}

module.exports = {
    validateNewUserData,
}