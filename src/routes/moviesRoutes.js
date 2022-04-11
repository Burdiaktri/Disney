import { Router } from "express"
import verifyToken from '../middlewares/verifyToken.js'
import validatePostMovie from "../middlewares/validator/movies.js"

import {
	getMovies,
	getOneMovie,
	getMovieByCharacter,
	createMovies,
	updateMovies,
	deleteMovies
} from '../controllers/moviesController.js'

const moviesRouter = Router()

moviesRouter
	.get("/", getMovies)
	.get('/:id', getOneMovie)
	.get('/character/:charactersid', getMovieByCharacter)
	.post("/", verifyToken, validatePostMovie, createMovies)
	.put("/:id",verifyToken,  updateMovies)
	.delete("/:id",verifyToken, deleteMovies)


export default moviesRouter