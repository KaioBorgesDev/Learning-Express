//imports 
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs')


const app = express();
const port = 3000;
const password = fs.readFileSync("./.pass", "utf-8");


const uri = `mongodb+srv://granadatutoriaisborges:${password.trim()}@cluster0.b7pxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const User = mongoose.model('User',{
    name: String,
    email: String,
    password: String,
})

mongoose.connect(uri)
.catch(console.error);

const createUserController = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        }  
    );

    await user.save();
    
    res.send(user);
}

//middlewares para poder ter acesso as requisicoes
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/api/user", createUserController)

app.listen(port)