const jwt = require('jsonwebtoken')
const User = require('../../models/User');
const secret = 'secret'


const createJwtController = (req,res) => {
    return User.findOne({email: req.body.email}).
    then((user) => {
        
        const data = {name: user.name, email: user.email}
       if(user.password == req.body.password){
        jwt.sign(data, secret, (err, token) => {
            if(!err){
                console.log('oi')
                res.status(201).json(token)
            }else{
                throw err;
            }
        });
       }else{
            throw new Error("Falha ao logar");
       }
    }).catch(err => res.status(401).json(err.message)) 
};

module.exports = createJwtController;