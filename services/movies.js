const moviesModel = require('../models/movies');

const createMovie = async (title, subtitle, description, cover) => {
    const createMovie = await moviesModel.createMovie(title, subtitle, description, cover);
    const { insertedId } = createMovie;
    return { success: 'created', code: 201, message: 'Filme adicionado com sucess', id: insertedId };
};

const getMovies = async () => {
    const movies = await moviesModel.getMovies();
    return movies;
};

const getByiD = async (id) => moviesModel.getById(id)

const updateMovie = async (id, title, subtitle, description, cover) => {
    const updated = await moviesModel.updateMovie(id, title, subtitle, description, cover);
    return updated;
}

const deleteMovie = async (id) => {
    const op = await moviesModel.deleteMovie(id);
    return op;
}

module.exports = {
    createMovie,
    getMovies,
    updateMovie,
    deleteMovie,
    getByiD,
};