//imports 
const express = require('express');
const connectDB = require('./settings/connect');
const {createUserController, getUserController, updateUserController, deleteUserController, getAllUsersController} = require('./controllers/users/index')
const createJwtController = require('./controllers/jwt/CreateJwt')
const jwtCheck = require('./middleware/JwtCheck');
connectDB();

const app = express();
const port = 3000;


//middlewares para poder ter acesso as requisicoes
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/api/user", createUserController);
app.get("/api/user/:id", getUserController);
app.get("/api/user", getAllUsersController);
app.put("/api/user/:id", jwtCheck, updateUserController);
app.delete("/api/user/:id", deleteUserController);
app.post('/api/jwt', createJwtController);

app.listen(port) 


module.exports = app;