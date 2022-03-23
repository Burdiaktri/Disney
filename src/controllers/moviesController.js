import Response from "../models/server/response.js";
import dbMovies from "../models/persistence/movies.js";

export const getMovies = async (req, res, next) => {
  try {
    const movies = await dbMovies.findAll({
      attributes: ["id", "image", "title", "date", "rating", "charactersid"],
    })
    !movies
      ? res.status(404).send(new Response("Movie not found", 404))
      : res.send(new Response(movies))
  } catch (error) {
    next(error)
  }
}

export const getOneMovie = async (req, res, next) => {
	const {id} = req.params
	try{
		const movie = await dbMovies.findOne({
			where: {
				id
			}
		})
		!movie
      ? res.status(404).send(new Response("Movie not found", 404))
      : res.send(new Response(movie))
	}catch (error){
		next(error)
	}
}

export const getMovieByCharacter = async (req, res, next) => {
const {charactersid} = req.params
try {
	const movies = await dbMovies.findAll({
		where: {
			charactersid
		}
	})
	!movies
      ? res.status(404).send(new Response("Movies not found", 404))
      : res.send(new Response(movies))

}catch (error){
	next(error)
}
}

export const createMovies = async (req, res, next) => {
  try {
    const { title, image, date, rating, charactersid } = req.body;

    const newMovie = await dbMovies.create({
      title,
      image,
      date,
      rating,
      charactersid,
    });

    res.send(new Response(newMovie));
  } catch (error) {

    next(error)
  }
};

export const updateMovies = async (req, res, next) => {
  const { id } = req.params;
  const { image, title, date, rating, charactersid } = req.body;
  try {
    const movie = await dbMovies.findOne({
      attributes: ["id", "image", "title", "date", "rating", "charactersid"],
      where: {
        id,
      },
    });
    const updatedMovie = await dbMovies.update(
      {
        image,
        title,
        date,
        rating,
        charactersid,
      },
      {
        where: {
          id,
        },
      }
    );

    updatedMovie
      ? res.send(new Response(movie))
      : res.status(404).send(new Response("Movie not found", 404))
  } catch (error) {
    next(error)
  }
};

export const deleteMovies = async (req, res, next) => {
  const { id } = req.params;
  try {
    const movies = await dbMovies.destroy({
      where: {
        id,
      },
    })
    movies
      ? res.send(new Response(movies))
      : res.status(404).send(new Response("Movie not found", 404))
  } catch (error) {
    next(error)
  }
};
