const User = require('../../models/User');

const getUserController = (req, res) =>{
    return User.findOne({_id: req.params.id})
    .then(user=> res.status(200).json(user))
    .catch(err => res.status(404).json({erro: [err.message]}))
}

module.exports = getUserController;