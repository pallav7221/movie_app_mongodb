const Movie = require("../database/movies")

async function fetchAllMovies(req,res,next){
    let {skip,limit,sortBy,field} = req.query;
    const movies = await Movie.find().sort({[field]:sortBy}).skip(skip).limit(limit);
     return res.send({
        data:movies,
     });
}

async function fetchSingleMovie(req,res,next){
    const {title} = req.params;

    const movie = await Movie.find({title:title});
    if(movie){
        return res.send({
            data:movie,
        });
    }else{
        return res.status(404).send({
            error:"movie with given Id not found",
        });
    }
}

async function getMovieByRating(req,res,next){
    const {rating} = req.params;
    
    let movies = await Movie.find({rating:rating});
    return res.send({
        message:"Movie data has been added",
        data:movies
    })
}
    async function searchMovie(req,res,next){
        const {q} = req.query;
        let movies = await Movie.find({title:{$regex:q}});
        return res.send({
            message: "Movie data has been updated",
            data: movies
        })
    }
    

module.exports={
    fetchAllMovies,
    fetchSingleMovie,
   getMovieByRating,
   searchMovie,
}