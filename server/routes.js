const express = require('express');
const router = express.Router();
const multer = require('multer');
const userValidation = require('../validations/users');
const usersControllers = require('../controllers/users');
const moviesControllers = require('../controllers/movies');
const moviesValidations = require('../validations/movies');

const uploadMovie = multer({ dest: 'uploads/movies/' }).single('cover');

/* USERS ROUTES */
router.post('/users/create',
  userValidation.validateNewUserData,
  userValidation.validateEmail,
  usersControllers.createUser
  );
router.post('/users/login', userValidation.validateLoginData, usersControllers.loginUser);
router.post('/movies/create',
  moviesValidations.validateToken,
  uploadMovie,
  moviesValidations.validateNewMovieData,
  moviesControllers.createMovie
);
router.get('/movies/', moviesControllers.getMovies);
router.put('/movies/update/:id', moviesValidations.validateToken, moviesValidations.validateId, uploadMovie, moviesValidations.validateUpdatedFields,moviesControllers.updateMovie);
router.delete('/movies/delete/:id', moviesValidations.validateToken, moviesValidations.validateId, moviesControllers.deleteMovie);
router.get('/movies/img/:filename', moviesControllers.getImage);

module.exports = router;  