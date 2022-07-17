const Movie = require("../database/movies")

async function fetchAllMovies(req,res,next){
    const movies = await Movie.find();
     return res.send({
        data:movies,
     });
}

async function fetchSingleMovie(req,res,next){
    const {id} = req.params;

    const movie = await Movie.findById(id)
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

async function addMovie(req,res,next){
    const {movie:movieData} = req.body;
    
    let movie = new Movie(movieData);

    await movie.save();

    return res.send({
        message:"Movie data has been added",
        data:movie
    })
}
    async function updateMovie(req,res,next){
        const {data:movieData} = req.body;
        let {id:movieId} = req.params;
        console.log(movieId)
        let movie = await Movie.findById(movieId);
        for(const [key ,value] of Object.entries(movieData)){
            movie[key]=value;
        }
        await movie.save();
        return res.send({
            message: "Movie data has been updated",
            data: movie
        })
    }
     async function deleteMovie(req,res,next){
            const {id:movieId} = req.params;
            await Movie.findByIdAndDelete(movieId);

            return res.send({
                message:"movie has been deleted",
    
            })
     }

module.exports={
    fetchAllMovies,
    fetchSingleMovie,
    addMovie,
    updateMovie,
    deleteMovie,
}