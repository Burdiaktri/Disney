import { Router } from "express"

import {
	getMovies,
	createMovies,
	updateMovies,
	deleteMovies
} from '../controllers/moviesController.js'

const moviesRouter = Router()

moviesRouter
	.get("/", getMovies)
	.post("/", createMovies)
	.put("/:id", updateMovies)
	.delete("/:id", deleteMovies)


export default moviesRouter