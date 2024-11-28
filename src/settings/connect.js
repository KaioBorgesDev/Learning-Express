const mongoose = require('mongoose');
const fs = require('fs');
const password = fs.readFileSync("./.pass", "utf-8");

const uri = `mongodb+srv://granadatutoriaisborges:${password.trim()}@cluster0.b7pxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connect = () => mongoose.connect(uri)
.catch(console.error);


module.exports = connect;