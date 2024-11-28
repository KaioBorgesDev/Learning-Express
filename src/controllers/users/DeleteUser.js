const User = require("../../models/User");


const deleteUserController = (req, res) =>{
    const query =  {_id: req.params.id};
    return User.deleteOne(query)
    .then((user) => res.status(200).json(user))
    .catch((err)=> res.status(500).json({erro: [err.message]}));
}
module.exports = deleteUserController;