const mongoose = require("mongoose");

module.exports = function ConnectDb(){
    try{
        mongoose.connect(process.env.MONGODB_URL);
        console.log("Database is connected");
    }catch(e){
        console.log("error : " + e );
    };
}