const mongoose = require('mongoose');
const mongoUri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const connectToMongo = () => {
    mongoose.connect(mongoUri, ()=>{console.log("Connected to Mongo Db Successfully")});
}
module.exports = connectToMongo;