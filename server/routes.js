const express = require('express');
const router = express.Router();

const userValidation = require('../validations/users');
const usersControllers = require('../controllers/users');

/* USERS ROUTES */
router.post('/users',
  userValidation.validateNewUserData,
  userValidation.validateEmail,
  usersControllers.createUser
  );

module.exports = router;