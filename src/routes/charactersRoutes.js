import { Router } from "express"
import verifyToken from '../controllers/verifyToken.js'

import {
	getCharacters,
	createCharacters,
	getOneCharacter,
	getCharacterByName,
	getCharacterByAge,
	updateCharacters,
	deleteCharacters
} from '../controllers/charactersController.js'

const charactersRouter = Router()

charactersRouter
	.get('/', /*verifyToken*/ getCharacters)
	.get('/:id', getOneCharacter)
	.get('/name/:name', getCharacterByName)
	.get('/age/:age', getCharacterByAge)
	.post('/', createCharacters)
	.put('/:id', updateCharacters)
	.delete('/:id', deleteCharacters)


export default charactersRouter