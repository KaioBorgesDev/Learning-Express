const jwt = require('jsonwebtoken')
const secret = 'secret';

const jwtCheck = (req,res,next) => {
    const authHeader = req.headers['authorization']; 
    const token = authHeader && authHeader.split(' ')[1]; 
    return jwt.verify(token, secret, (err) =>{
        if(!err){
            return next();
        }
        res.json({erros: [err.message]})
    }) 
}

module.exports = jwtCheck;