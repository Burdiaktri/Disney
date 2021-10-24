import { Router } from "express"

const charactersRouter = Router()

charactersRouter
	.get("/characters", getCharacters)
	.get("/characters/:name", getByNameCharacters)
	.get("/characters/:age", getByAgeCharacters)
	.get("/characters/:movies", getByMoviesCharacters)
	.post("/characters", createCharacters)
	.put("/characters//:id", updateCharacters)
	.delete("/characters/:id", deleteCharacters)


export default charactersRouter