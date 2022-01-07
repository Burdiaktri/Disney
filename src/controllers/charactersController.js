import Response from "../models/server/response.js";
import dbCharacters from "../models/persistence/characters.js";

export const getCharacters = async (req, res, next) => {
  try {
    const characters = await dbCharacters.findAll()
    !characters
      ? res.status(404).send(new Response("character not found", 404))
      : res.send(new Response(characters));
  } catch (error) {

    next(error)
  }
}
export const getOneCharacter = async (req, res, next) => {
  const { id } = req.params;
  try {
    const character = await dbCharacters.findOne({
      where: {
        id
      },
    });
    !character
      ? res.status(404).send(new Response("character not found", 404))
      : res.send(new Response(character));
  } catch (error) {
    next(error)
  }
}

export const getCharacterByName = async (req, res, next) => {
  const { name } = req.params
  try {
    const character = await dbCharacters.findOne({
      where: {
        name
      },
    })
    !character
      ? res.status(404).send(new Response("character not found", 404))
      : res.send(new Response(character))
  } catch (error) {
    next(error)
  }
}

export const getCharacterByAge= async (req, res, next) => {
  const { age } = req.params
  try {
    const character = await dbCharacters.findOne({
      where: {
        age
      },
    })
    !character
      ? res.status(404).send(new Response("character not found", 404))
      : res.send(new Response(character))
  } catch (error) {
    next(error)
  }
}


export const createCharacters = async (req, res, next) => {
  const { image, name, age, story, moviesid } = req.body

  try {
    let newCharacter = await dbCharacters.create({
      image,
      name,
      age,
      story,
      moviesid,
    });

    if (newCharacter) {
      res.send(new Response(newCharacter));
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};


export const updateCharacters = async (req, res, next) => {
  const { id } = req.params
  const { image, name, age, story, movies } = req.body
  try {
	const characters = await dbCharacters.findAll({
		attributes:["id", "image", "name", "age", "story", "moviesid"],
		where: {
			id
		}
	})
    if(characters.length > 0){
		characters.forEach(async character => {
			await character.update({
				image,
				name,
				age,
				story,
				moviesid
			})
		})
	}
	characters
      ? res.send(new Response(characters))
      : res
          .status(404)
          .send(new Response("Character not found", 404));
  } catch (error) {
    next(error)
  }
};

export const deleteCharacters = async (req, res, next) => {
  const { id } = req.params
  try {
    const character = await dbCharacters.destroy({
		where: {
			id
		}
	})
    character
      ? res.send(new Response(character))
      : res
          .status(404)
          .send(new Response("Character not found", 404));
  } catch (error) {
    next(error)
  }
};
