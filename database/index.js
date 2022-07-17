const mongoose = require("mongoose");

async function connectDatabase(){
    const dbUri = "mongodb://localhost:27017/movie_app";
    try {
        const respose = await mongoose.connect(dbUri);
        console.log("Connection Successful")
    } catch (e) {
        console.error("Something wrong ",e.message)
        throw e;
    }
}
module.exports= connectDatabase
