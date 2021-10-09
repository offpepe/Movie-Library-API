const fs = require('fs');
const STATUS = require('../services/httpStatus');
const ERROR = require('../error/messages');

const validateNewMovieData = (req, res, next) => {
  const { title, subtitle, description } = req.body;
  const { mimetype, filename } = req.file;
  const type = mimetype.split('/');
  if (!title || !subtitle || !description) {
    fs.unlinkSync(`./uploads/movies/${filename}`);
    return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.newMovieData);
  }
  if (type[1] !== 'jpeg') {
    fs.unlinkSync(`./uploads/movies/${filename}`);  
    return res.status(STATUS.ERROR.NOT_ACCEPTABLE).json(ERROR.fileTypeNotAcceptable);
  }
  next();
};

module.exports = {
    validateNewMovieData,
}