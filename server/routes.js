const express = require('express');
const router = express.Router();

const userValidation = require('../validations/users');
const usersControllers = require('../controllers/users');

/* USERS ROUTES */
router.post('/users', userValidation.validateNewUserData, usersControllers.createUser);

module.exports = router;