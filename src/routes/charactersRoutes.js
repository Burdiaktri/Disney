import { Router } from "express"
import verifyToken from '../controllers/verifyToken.js'

import {
	getCharacters,
	createCharacters,
	updateCharacters,
	deleteCharacters
} from '../controllers/charactersController.js'

const charactersRouter = Router()

charactersRouter
	.get('/', verifyToken, getCharacters)
	.post('/', createCharacters)
	.put('/:id', updateCharacters)
	.delete('/:id', deleteCharacters)


export default charactersRouter