const conn = require('../connections/mongodb_conn');

const coll = 'movies';

const createMovie = async (title, subtitle, description, conver) => {
  const db = await conn();
  const op = await db.collection(coll).insertOne({ title, subtitle, description, conver });
  return op;
};


const getMovies = async () => {
  const db = await conn();
  const movies = await db.collection(coll).find().toArray();
  return movies; 
}

module.exports = {
  createMovie,
  getMovies,
}