const conn = require('../connections/mongodb_conn');

const coll = 'users';

const createUser = async (username, email, type, password) => {
      const db = await conn();
      const op = await db.collection(coll).insertOne({ username, email, type, password  }); 
      return op;
}

const loginUser = async (email, password) => {
  const db = await conn();
  const op = await db.collection(coll).find({ email, password }).toArray();
  const user = op[0];
  return user;
}

const getUserByEmail = async (email) => {
  const db = await conn();
  const user = await db.collection(coll).find({ email }).toArray();
  return user[0];
}

const resetPassword = async (email, password) => {
  const db = await conn();
  const op = await db.collection(coll).findOneAndUpdate({ email }, { $set: { password } }, { returnDocument: 'after' });
  return op;
}

module.exports = {
    createUser,
    loginUser,
    getUserByEmail,
    resetPassword,
} 