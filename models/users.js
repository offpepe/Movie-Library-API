const conn = require('../connections/mongodb_conn')

const coll = 'users';

const createUser = async (username, email, password) => {
      const db = await conn();
      const op = await db.collection(coll).insertOne({ username, email, password  }); 
      return op;
}

const loginUser = async (email, password) => {
  const db = await conn();
  const op = await db.collection(coll).find({ email }).toArray();
  const user = op[0];
  return user;
}

module.exports = {
    createUser,
    loginUser,
}