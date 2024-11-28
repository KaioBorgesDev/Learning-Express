//imports 
const express = require('express');
const connectDB = require('./src/settings/connect');
const {createUserController, getUserController} = require('./src/controllers/users/index')

connectDB();

const app = express();
const port = 3000;


//middlewares para poder ter acesso as requisicoes
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/api/user", createUserController);
app.get("/api/user/:id", getUserController);

app.listen(port)