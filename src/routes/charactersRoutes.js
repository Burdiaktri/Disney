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
	.get('/', /*verifyToken,*/ getCharacters)
	.get('/:id', /*verifyToken,*/  getOneCharacter)
	.get('/name/:name', /*verifyToken,*/ getCharacterByName)
	.get('/age/:age',/*verifyToken,*/ getCharacterByAge)
	.post('/', /*verifyToken,*/ createCharacters)
	.put('/:id', /*verifyToken,*/ updateCharacters)
	.delete('/:id',/*verifyToken,*/ deleteCharacters)


export default charactersRouter