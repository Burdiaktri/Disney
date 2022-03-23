import { Router } from "express"
import verifyToken from '../controllers/verifyToken.js'

import {
	getCharacters,
	createCharacters,
	getOneCharacter,
	updateCharacters,
	deleteCharacters
} from '../controllers/charactersController.js'

const charactersRouter = Router()

charactersRouter
	.get('/', getCharacters)
	.get('/:id',  getOneCharacter)
	.post('/', verifyToken, createCharacters)
	.put('/:id', verifyToken, updateCharacters)
	.delete('/:id', verifyToken, deleteCharacters)


export default charactersRouter