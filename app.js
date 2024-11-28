//imports 
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs')


const app = express();
const port = 3000;
const password = fs.readFileSync("./.pass", "utf-8");

const User = require('./src/models/User');

const uri = `mongodb+srv://granadatutoriaisborges:${password.trim()}@cluster0.b7pxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


mongoose.connect(uri)
.catch(console.error);

const createUserController = async (req, res) => {
    return User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(err => res.status(500).json({erro: [err.message]}));
}

const getUserController = (req, res) =>{
    return User.findOne({_id: req.params.id})
    .then(user=> res.status(200).json(user))
    .catch(err => res.status(404).json({erro: [err.message]}))
}

//middlewares para poder ter acesso as requisicoes
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/api/user", createUserController);
app.get("/api/user/:id", getUserController);

app.listen(port)