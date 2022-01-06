import { v4 } from "uuid"

export class Character {
    constructor(image, name, age, story, movies ){
        this.id = v4(),
        this.image = image,
        this.name = name,
        this.age = age,
        this.story = story,
        this.movies = movies
    }
}