const mongoose = require('mongoose');
const fs = require('fs');
const password = fs.readFileSync("./src/.pass", "utf-8");


const getUriByEnv = () => {
    if(process.env.NODE_ENV === 'testing')
        return process.env.MONGO_URL;
    return `mongodb+srv://granadatutoriaisborges:${password.trim()}@cluster0.b7pxl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
}
const connect = () =>{
    mongoose.connect(getUriByEnv())
.catch(console.error);
}
   


module.exports = connect;