const usersService = require('../services/users');

const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    const op = await usersService.createUser(username, email, password);
    return res.status(201).json(op);
};

module.exports = {
    createUser,
};