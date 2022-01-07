import { Router } from "express"
import verifyToken from '../controllers/verifyToken.js'

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
	.get("/", /*verifyToken*/ getMovies)
	.get('/:id', getOneMovie)
	.get('/character/:charactersid', getMovieByCharacter)
	.post("/", createMovies)
	.put("/:id", updateMovies)
	.delete("/:id", deleteMovies)


export default moviesRouter