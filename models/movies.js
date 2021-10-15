const { ObjectId } = require('bson');
const conn = require('../connections/mongodb_conn');
const fs = require('fs');

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

const updateMovie = async (id, title, subtitle, genre, releaseDate, rate, description, cover, lastUpdate) => {
   const db = await conn();
   const movie = await getById(id);
   const { cover: oldCover } = movie[0];
   fs.unlinkSync(`./uploads/movies/${oldCover}`);
   const updated = await db.collection(coll).findOneAndUpdate({ _id: ObjectId(id) }, { $set: {  
       title,
       subtitle,
       description,
       genre,
       releaseDate,
       rate,
       cover,
       lastUpdate,
       }}, { returnDocument: 'after' });
   return updated;
};

const deleteMovie = async (id) => {
    const db = await conn();
    const movie = await getById(id);
    const { cover } = movie[0];
    fs.unlinkSync(`./uploads/movies/${cover}`);
    return db.collection(coll).findOneAndDelete({ _id: ObjectId(id) });
}

module.exports = {
  createMovie,
  getMovies,
  updateMovie,
  getById,
  deleteMovie,
}