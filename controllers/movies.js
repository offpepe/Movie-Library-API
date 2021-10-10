const STATUS = require('../services/httpStatus');
const ERROR = require('../error/messages');
const moviesService = require('../services/movies');

const internalError = (error) => ({ error: 'internal_error', code: 505, message: `Houve um erro interno: ${error.message}` })

const createMovie = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;
    const { path } = req.file; 
    console.log(req.file);
    const op = await moviesService.createMovie(title, subtitle, description, path);
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
}

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, subtitle, description } = req.body;
    const { path } = req.file;
    const updated = await moviesService.updateMovie(id, title, subtitle, description, path);
    res.status(STATUS.SUCCESS.ACCEPTED).json(updated);
  } catch (error) {
    res.status(STATUS.ERROR.INTERNAL_ERROR).json(internalError(error));
  }
}

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await moviesService.deleteMovie(id);
    const { value } = deleted;
    if(!value) return res.status(STATUS.ERROR.NOT_FOUND).json(ERROR.idNotFound);
    res.status(STATUS.SUCCESS.OK).json({ success: 'Filme deletado com sucesso!' });
  } catch (error) {
    res.status(STATUS.ERROR.INTERNAL_ERROR).json(internalError(error));

  }
}

module.exports = {
    createMovie,
    getMovies,
    updateMovie,
    deleteMovie,
}