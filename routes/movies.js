const express = require("express");
const { fetchAllMovies, fetchSingleMovie, getMovieByRating, searchMovie } = require("../handler/movies");

const moviesRouter = express.Router();

moviesRouter.get("/movies/all",fetchAllMovies);
moviesRouter.get("/movies/all/:title", fetchSingleMovie);
moviesRouter.get("/:rating",getMovieByRating);
moviesRouter.get("/movies",searchMovie)
module.exports=moviesRouter
