import {Sequelize} from 'sequelize'
import {sequelize} from '../../database/db.js'
import dbMovies from './movies.js'

const dbCharacters = sequelize.define('characters', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: Sequelize.TEXT
    },
    name: {
        type: Sequelize.TEXT
    },
    age: {
        type: Sequelize.INTEGER
    },
    story: {
        type: Sequelize.TEXT
    },
    moviesid: {
        type: Sequelize.INTEGER
    },  
},{
    timestamps: false
})


export default dbCharacters