const STATUS = require('../services/httpStatus');
const ERROR = require('../error/messages');
const moviesService = require('../services/movies');

const createMovie = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;
    const { cover: { path } } = req.file;
    const op = await moviesService.createMovie(title, subtitle, description, path);
    res.status(STATUS.SUCCESS.CREATED).json(op);   
  } catch (error) {
    res.status(STATUS.ERROR.INTERNAL_ERROR).json({ internalError: {
        error: 'internal_error',
        code: 505,
        message: `Houve um erro interno: ${error.message}`
    }});
  }
}

module.exports = {
    createMovie,
}