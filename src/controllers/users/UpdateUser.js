const User = require('../../models/User');

const updateUserController = (req,res) =>{
    const query = { _id: req.params.id };

    const updateData = { $set: req.body };

    const options = { new: true, fields: 'name'}
    return User.findOneAndUpdate(query, updateData, options)
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(500).json({erro: [err]}));
}

module.exports = updateUserController;