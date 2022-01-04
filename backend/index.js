const connectToMongo = require('./db');
const express = require('express');
  
connectToMongo();
const app = express();
const port=3000;
// app.get('/', function (req, res) {
//     res.send('Hello new Request!');
//   })
app.use(express.json())//use middleware if you want to use req.body
/*End Points*/
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
// app.use('/', (req, res)=>{    
//   res.json();
// })
app.listen(port,()=>{
    console.log("Listening to port:" +port);
}) 

//inside index file
//port listen
//api calls;endpoints
