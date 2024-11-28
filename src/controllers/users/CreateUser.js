const User = require('../../models/User');

const createUserController = async (req, res) => {
    return User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json({erro: [err.message]}));
}

module.exports = createUserController;