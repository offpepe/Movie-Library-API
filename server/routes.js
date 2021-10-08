const express = require('express');
const router = express.Router();

const userValidation = require('../validations/users');
const usersControllers = require('../controllers/users');

/* USERS ROUTES */
router.post('/users/create',
  userValidation.validateNewUserData,
  userValidation.validateEmail,
  usersControllers.createUser
  );

router.post('/users/login', userValidation.validateLoginData, usersControllers.loginUser);

module.exports = router;