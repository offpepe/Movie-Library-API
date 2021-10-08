const express = require('express');
const router = express.Router();
const multer = require('multer');
const userValidation = require('../validations/users');
const usersControllers = require('../controllers/users');
const formDataTest = require('../controllers/test_formData');

const upload = multer({ dest: 'uploads/' });
const type = upload.single('file.png');

/* USERS ROUTES */
router.post('/users/create',
  userValidation.validateNewUserData,
  userValidation.validateEmail,
  usersControllers.createUser
  );
router.post('/users/login', userValidation.validateLoginData, usersControllers.loginUser);
router.post('/upload', type, formDataTest);

module.exports = router;