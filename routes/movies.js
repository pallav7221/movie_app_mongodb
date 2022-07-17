const express = require("express");
const { fetchAllMovies, fetchSingleMovie, addMovie, updateMovie, deleteMovie } = require("../handler/movies");

const moviesRouter = express.Router();

moviesRouter.get("/movies/all",fetchAllMovies)
moviesRouter.get("/movies/:id", fetchSingleMovie);
moviesRouter.post("/movies",addMovie)
moviesRouter.patch("/movies/:id",updateMovie),
moviesRouter.delete("/movies/:id",deleteMovie)
module.exports=moviesRouter
