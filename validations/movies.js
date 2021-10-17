const fs = require('fs').promises;
const { ObjectId } = require('mongodb');
const STATUS = require('../services/httpStatus');
const ERROR = require('../error/messages');

const validateNewMovieData = (req, res, next) => {
  const { title, subtitle, genre, releaseDate, description, createdBy, createdAt } = req.body;
  let { rate } = req.body;
  rate = Number(rate);
  const { mimetype, filename } = req.file;
  const type = mimetype.split('/');
  if (!title || !subtitle || !description || !genre || !releaseDate || !rate || !createdBy || !createdAt ) {
    return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.newMovieData);
  }
  if (type[1] !== 'jpeg') {
    return res.status(STATUS.ERROR.NOT_ACCEPTABLE).json(ERROR.fileTypeNotAcceptable);
  }
  if (typeof rate !== 'number' || rate > 5 || rate < 1) {x
    return res.status(STATUS.ERROR.NOT_ACCEPTABLE).json(ERROR.invalidRate);
  }
  next();
};

const validateUpdatedFields = async (req, res, next) => {
  const {  title, subtitle, genre, releaseDate, description, rate } = req.body;
  if(!title || !subtitle || !description || !genre || !releaseDate || !rate  ) return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.someFieldEmpty);
  if (!req.file) return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.fileNotFoundCover);
  next();
}

const validateId = async (req, res, next) => {
  const { id } = req.params;
  if(!ObjectId.isValid(id)) return res.status(STATUS.ERROR.UNPROCESSABLE_ENTITY).json(ERROR.invalidId);
  next()
}


module.exports = {
    validateNewMovieData,
    validateUpdatedFields,
    validateId,
}