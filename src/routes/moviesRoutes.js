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
	.get("/", /*verifyToken,*/ getMovies)
	.get('/:id', /*verifyToken,*/ getOneMovie)
	.get('/character/:charactersid',/*verifyToken,*/ getMovieByCharacter)
	.post("/", /*verifyToken,*/ createMovies)
	.put("/:id",/*verifyToken,*/  updateMovies)
	.delete("/:id",/*verifyToken,*/ deleteMovies)


export default moviesRouter