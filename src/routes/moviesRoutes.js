import { Router } from "express"
import verifyToken from '../controllers/verifyToken.js'

import {
	getMovies,
	createMovies,
	updateMovies,
	deleteMovies
} from '../controllers/moviesController.js'

const moviesRouter = Router()

moviesRouter
	.get("/", verifyToken, getMovies)
	.post("/", createMovies)
	.put("/:id", updateMovies)
	.delete("/:id", deleteMovies)


export default moviesRouter