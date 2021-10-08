const conn = require('../connections/mongodb_conn')

const createUser = async (username, email, password) => {
    try {
      const db = await conn()
      const op = await db.collection('users').insertOne({ username, email, password  }); 
      return op;
    } catch (error) {
      return error;
    }
}

module.exports = {
    createUser,
}