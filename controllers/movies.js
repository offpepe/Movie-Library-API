const STATUS = require('../services/httpStatus');
const ERROR = require('../error/messages');
const path = require('path');
const moviesService = require('../services/movies');

const internalError = (error) => ({ error: 'internal_error', code: 505, message: `Houve um erro interno: ${error.message}` })

const createMovie = async (req, res) => {
  try {
    const { title, subtitle, genre, releaseDate, rate, createdBy, createdAt, description } = req.body;
    const { filename } = req.file; 
    const op = await moviesService.createMovie(title, subtitle, genre, releaseDate, rate, createdBy, createdAt, description, filename);
    res.status(STATUS.SUCCESS.CREATED).json(op);   
  } catch (error) {
    res.status(STATUS.ERROR.INTERNAL_ERROR).json(internalError(error));
  }
};

const getMovies = async (_req, res) => {
  try {
    const movies = await moviesService.getMovies();
    res.status(STATUS.SUCCESS.OK).json({ movies })
  } catch (error) {
    res.status(STATUS.ERROR.INTERNAL_ERROR).json(internalError(error));
  }
};

const getById = async (req,res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const movie = await moviesService.getByiD(id);
    res.status(STATUS.SUCCESS.OK).json(movie)
  } catch (error) {
    res.status(STATUS.ERROR.INTERNAL_ERROR).json(internalError(error));
  }
}

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, subtitle, genre, releaseDate, rate, description, lastUpdate } = req.body;
    const { filename } = req.file;
    const updated = await moviesService.updateMovie(id, title, subtitle, genre, releaseDate, rate, description, filename, lastUpdate);
    res.status(STATUS.SUCCESS.ACCEPTED).json(updated);
  } catch (error) {
    res.status(STATUS.ERROR.INTERNAL_ERROR).json(internalError(error));
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await moviesService.deleteMovie(id);
    const { value } = deleted;
    if(!value) return res.status(STATUS.ERROR.NOT_FOUND).json(ERROR.idNotFound);
    res.status(STATUS.SUCCESS.OK).json({ success: 'Filme deletado com sucesso!' });
  } catch (error) {

  }
};

  const getImage = (req, res) => {
    try {
      const { cover } = req.params;
      res.status(STATUS.SUCCESS.OK).sendFile(cover, { root: path.join(__dirname, '../uploads/movies') });
    } catch (error) { 
      res.status(STATUS.ERROR.INTERNAL_ERROR).json(internalError(error));
    }
  }

module.exports = {
    createMovie,
    getMovies,
    updateMovie,
    deleteMovie,
    getImage,
    getById,
}