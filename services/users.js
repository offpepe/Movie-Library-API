const usersModel = require('../models/users');

const createUser = async (username, email, password) => {
    const op = await usersModel.createUser(username, email, password);
    return op;
}

module.exports = {
    createUser,
}
