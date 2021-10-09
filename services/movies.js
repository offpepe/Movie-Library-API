const moviesModel = require('../models/movies');

const createMovie = async (title, subtitle, description, conver) => {
    const createMovie = await moviesModel(title, subtitle, description, conver);
    return createMovie;
};

module.exports = {
    createMovie,
};