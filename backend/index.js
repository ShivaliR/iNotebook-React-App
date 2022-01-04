const connectToMongo = require('./db');
const express = require('express');
  
connectToMongo();
const app = express();
const port=3000;
app.get('/', function (req, res) {
    res.send('Hello new Request!');
  })
app.listen(port,()=>{
    console.log("Listening to port:" +port);
}) 
