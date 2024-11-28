const User = require("../../models/User")

const getAllUsersController = (req,res) =>{
    return User.find({})
    .then((users) => res.status(200).json(users))
    .catch((err) => res.status(500).json({erro: [err.message]}))
}
module.exports = getAllUsersController;