const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const userValidation = require('../validations/users');
const usersControllers = require('../controllers/users');
const moviesControllers = require('../controllers/movies');
const moviesValidations = require('../validations/movies');

const router = express.Router();
/* multer setup w/s3 aws service */
const credentials = new aws.SharedIniFileCredentials({ profile: 'personal-account' });
aws.config.region = 'us-east-2';
aws.config.credentials = credentials;
const { S3_BUCKET_NAME } = process.env
const s3 = new aws.S3({ /* -- */ });
const uploadMovie = multer({
  storage: multerS3({
    s3,
    bucket: S3_BUCKET_NAME,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: (_req, file, cb) => {
      cb(null, {fieldName: file.fieldname});
    },
    key: (_req, _file, cb) =>  {
      cb(null, Date.now().toLocaleString('pt-br'));
    }
  }),
  dest: 'uploads/movies/',
}).single('cover');


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
router.post('/test/upload', uploadMovie, (req, res) => {
  res.status(200).json(req.file);
});

module.exports = router;  
