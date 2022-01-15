const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')  
connectToMongo();
const app = express();
const port=5000;
// app.get('/', function (req, res) {
//     res.send('Hello new Request!');
//   })
app.use(cors())
app.use(express.json())//use middleware if you want to use req.body
/*End Points -- Available routes*/
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
// app.use('/', (req, res)=>{    
//   res.json();
// })
app.listen(port,()=>{
    console.log("iNotebook backend listening to port:" +port);
}) 

//inside index file
//port listen
//api calls;endpoints
