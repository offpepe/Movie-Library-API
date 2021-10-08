const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users');

/* USERS ROUTES */
router.post('/users', usersControllers.createUser);

module.exports = router;