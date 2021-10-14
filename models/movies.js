const { ObjectId } = require('bson');
const conn = require('../connections/mongodb_conn');

const coll = 'movies';

const createMovie = async (title, subtitle, genre, releaseDate, rate, createdBy, createdAt, description, cover) => {
  const db = await conn();
  const op = await db.collection(coll).insertOne({ title, subtitle, genre, releaseDate, rate, createdBy, createdAt, description, cover });
  return op;
};


const getMovies = async () => {
  const db = await conn();
  const movies = await db.collection(coll).find().toArray();
  return movies; 
};

const getById = async (id) => {
  const db = await conn();
  const movie = await db.collection(coll).find({ _id: ObjectId(id) }).toArray();
  return movie;
};

const updateMovie = async (id, title, subtitle, description, cover) => {
   const db = await conn();
   const updated = await db.collection(coll).findOneAndUpdate({ _id: ObjectId(id) }, { $set: {  
       title,
       subtitle,
       description,
       cover }}, { returnDocument: 'after' });
   return updated;
};

const deleteMovie = async (id) => {
    const db = await conn();
    return db.collection(coll).findOneAndDelete({ _id: ObjectId(id) });
}

module.exports = {
  createMovie,
  getMovies,
  updateMovie,
  getById,
  deleteMovie,
}