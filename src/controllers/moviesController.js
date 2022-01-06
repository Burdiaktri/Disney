import {Movies} from '../models/disney/movies.js'
import Response from '../models/server/response.js'
import dbMovies from '../models/persistence/movies.js'


export const getMovies = async (req, res, next) => {
	const {id} = req.params;
	try {
		let response = id
			? await dbMovies.findById('movies', id)
			: await dbMovies.findAll('movies');
		!response && id
			? res
					.status(404)
					.send(new Response(response, 'Movie not found', 404))
			: res.send(new Response(response));
	} catch (error) {
		next(error);
	}
};

export const createMovies = async (req, res, next) => {
	try {
		const {title, image, date, rating, characters} = req.body

		const newMovie = new Movies (
			title,
			image,
			date,
			rating,
			characters,
		)

		let response = await dbMovies.create('movies', newMovie);
		res.send(new Response(response));
	} catch (error) {
		console.log(error)
		next(error);
	}
};

export const updateMovies = async (req, res, next) => {
	const {id} = req.params;
	try {
		const properties = [
			'id',
			'title',
			'image',
			'date',
			'rating',
			'characters'
		]
		let items = {}
		for (const key in req.body) {
			if (properties.includes(key)) {
				items[key] = req.body[key]
			}
		}
		let response = await dbMovies.update('movies', id, items);
		response
			? res.send(new Response(response))
			: res
					.status(404)
					.send(new Response(response, 'Movie not found', 404));
	} catch (error) {
		next(error);
	}
};

export const deleteMovies = async (req, res, next) => {
	const {id} = req.params
	try {
		let response = await dbMovies.remove('movies', id);
		response
			? res.send(new Response(response))
			: res
					.status(404)
					.send(new Response(response, 'Producto no encontrado', 404));
	} catch (error) {
		next(error);
	}
};
