const express = require('express');
const router = express.Router();
const multer = require('multer');
const userValidation = require('../validations/users');
const usersControllers = require('../controllers/users');
const moviesControllers = require('../controllers/movies');
const formDataTest = require('../controllers/test_formData');

const upload = multer({ dest: 'uploads/' });
const type = upload.single('file.png');
const uploadMovie = multer({ dest: 'uploads/movies/' }).single('cover');

/* USERS ROUTES */
router.post('/users/create',
  userValidation.validateNewUserData,
  userValidation.validateEmail,
  usersControllers.createUser
  );
router.post('/users/login', userValidation.validateLoginData, usersControllers.loginUser);
router.post('/upload', type, formDataTest);
router.post('/movies/create', uploadMovie, moviesControllers.createMovie);
router.get('/movies/', moviesControllers.getMovies);

module.exports = router;