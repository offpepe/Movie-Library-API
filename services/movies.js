const moviesModel = require('../models/movies');

const createMovie = async (title, subtitle, genre, releaseDate, rate, createdBy, createdAt, description, cover) => {
    const createMovie = await moviesModel.createMovie(title, subtitle, genre, releaseDate, rate, createdBy, createdAt, description, cover);
    const { insertedId } = createMovie;
    return { success: 'created', code: 201, message: 'Filme adicionado com sucess', id: insertedId };
};

const getMovies = async () => {
    const movies = await moviesModel.getMovies();
    return movies;
};

const getByiD = async (id) => {
    const movie = await moviesModel.getById(id);
    return movie;
};

const updateMovie = async (id, title, subtitle, description, cover) => {
    const updated = await moviesModel.updateMovie(id, title, subtitle, description, cover);
    return { success: 1,
    message: 'filme atualizado com sucesso!',
    result: updated.value };
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