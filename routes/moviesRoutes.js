import { Router } from "express"
const moviesRouter = Router()

movieRouter
	.get("/movies", getMovies)
	.get("/movies/:name", getByNameMovies)
	.get("/movies/:genre", getByGenreMovies)
	.get("/movies/:order", getByOrderMovies)
	.post("/movies", createMovies)
	.put("/movies/:id", updateMovies)
	.delete("/movies/:id", deleteMovies)


export default moviesRouter