import { v4 } from "uuid"

export class Movies {
    constructor(image, title, date, rating, characters){
        this.id = v4(),
        this.image = image,
        this.title = title,
        this.date = date,
        this.rating = rating,
        this.characters = [characters]
    }
}