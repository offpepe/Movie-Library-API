const express = require('express');
const router = express.Router();
const multer = require('multer'); 
const userValidation = require('../validations/users');
const usersControllers = require('../controllers/users');
const moviesControllers = require('../controllers/movies');
const moviesValidations = require('../validations/movies');

const uploadMovie = multer({ dest: 'uploads/movies/' }).single('cover');

/* USERS ROUTES */

router.get('/users/:email', userValidation.validateEmailParam, usersControllers.getUserByEmail);
router.get('/users/validate/:token', userValidation.validateToken, usersControllers.validateToken);
router.post('/users/create',
  userValidation.validateNewUserData,
  userValidation.validateEmail,
  usersControllers.createUser
  );
router.post('/users/login', userValidation.validateLoginData, usersControllers.loginUser);
router.post('/users/reset/:token', userValidation.validateResetData, usersControllers.resetPassword);

/* MOVIE ROUTES */

router.post('/movies/create',
  userValidation.validateTokenPost,
  uploadMovie,
  moviesValidations.validateNewMovieData,
  moviesControllers.createMovie
);
router.get('/movies/', moviesControllers.getMovies);
router.get('/movies/:id', moviesValidations.validateId, moviesControllers.getById);
router.put('/movies/update/:id', userValidation.validateTokenPost, moviesValidations.validateId, uploadMovie, moviesValidations.validateUpdatedFields,moviesControllers.updateMovie);
router.delete('/movies/delete/:id', userValidation.validateTokenPost, moviesValidations.validateId, moviesControllers.deleteMovie);
router.get('/movies/img/:cover', moviesControllers.getImage);

module.exports = router;  
