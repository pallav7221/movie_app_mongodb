const mongoose = require("mongoose");

//here we define Schema
const movieSchema = new mongoose.Schema({
    title : {
        type: String,
        requied : true
    },
    relased_year:{
        type : Number,
        required : true,
    },
    poster:String,
    rating : Number,
    type:String
})

//define model
const Movie = new mongoose.model("Movie",movieSchema)

module.exports=Movie;