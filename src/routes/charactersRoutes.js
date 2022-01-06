import { Router } from "express"

import {
	getCharacters,
	createCharacters,
	updateCharacters,
	deleteCharacters
} from '../controllers/charactersController.js'

const charactersRouter = Router()

charactersRouter
	.get('/', getCharacters)
	.post('/', createCharacters)
	.put('/:id', updateCharacters)
	.delete('/:id', deleteCharacters)


export default charactersRouter