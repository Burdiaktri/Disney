import {Character} from '../models/disney/characters.js'
import Response from '../models/server/response.js'
import dbCharacters from '../models/persistence/characters.js'

export const getCharacters = async (req, res, next) => {
    const {id} = req.params 
    try {
        let response = id 
             ? await dbCharacters.findById('characters', id)
			 : await dbCharacters.findAll('characters')
            !response && id 
                ? res		
					.status(404)
					.send(new Response(response, 'character not found', 404))
				: res.send(new Response(response))
    } catch (error) {
        next(error)
    }
}

export const createCharacters = async (req, res, next) => {

    const {image, name, age, story, movies} = req.body

    try {
        const newCharacter = new Character(
            image,
            name, 
            age,
            story,
            movies
        )
        let response = await dbCharacters.create('characters', newCharacter)
        res.send(new Response(response))
    }catch(error){
		console.log(error)
        next(error)
    }
}

export const updateCharacters = async (req, res, next) => {
	const {id} = req.params
	try {
		const properties = [
			'id',
			'image',
			'name',
			'age',
			'story',
			'movies'
		]
		let char = {}
		for (const key in req.body) {
			if (properties.includes(key)) {
				char[key] = req.body[key]
			}
		}
		let response = await dbCharacters.update('characters', id, char)
		response
			? res.send(new Response(response))
			: res
					.status(404)
					.send(new Response(response, 'Character not found', 404))
	} catch (error) {
		next(error)
	}
}

export const deleteCharacters = async (req, res, next) => {
	const {id} = req.params
	try {
		let response = await dbCharacters.remove('characters', id)
		response
			? res.send(new Response(response))
			: res
					.status(404)
					.send(new Response(response, 'Character not found', 404))
	} catch (error) {
		next(error)
	}
}