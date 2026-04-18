const mongoose = require("mongoose");

module.exports = function ConnectDb(){
    try{
        mongoose.connect("mongodb://localhost:27017/mydatabase");
        console.log("Database is connected");
    }catch(e){
        console.log("error : " + e );
    };
}