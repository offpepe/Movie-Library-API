const moviesModel = require('../models/movies');

const createMovie = async (title, subtitle, description, conver) => {
    const createMovie = await moviesModel.createMovie(title, subtitle, description, conver);
    const { insertedId } = createMovie;
    return { success: 'created', code: 201, message: 'Filme adicionado com sucess', id: insertedId };
};

const getMovies = async () => {
    const movies = await moviesModel.getMovies();
    return movies;
};

module.exports = {
    createMovie,
    getMovies,
};