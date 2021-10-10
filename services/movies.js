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

const updateMovie = async (id, title, subtitle, description, conver) => {
    const updated = await moviesModel.updateMovie(id, title, subtitle, description, conver);
    return updated
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
};