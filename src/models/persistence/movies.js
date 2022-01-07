
import {Sequelize} from 'sequelize'
import { sequelize } from '../../database/db.js'
import dbCharacters from './characters.js'

const dbMovies = sequelize.define('movies', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: Sequelize.TEXT
    },
    title: {
        type: Sequelize.TEXT
    },
    date: {
        type: Sequelize.DATE
    },
    rating: {
        type: Sequelize.INTEGER
    },
    charactersid: {
        type: Sequelize.INTEGER
    }, 
    
},{
    timestamps: false
})

dbMovies.hasMany(dbCharacters, {foreignKey: 'moviesid', sourceKey: 'id'})
dbCharacters.belongsTo(dbMovies, {foreignKey: 'moviesid', sourceKey: 'id'})
export default dbMovies