
import {Sequelize} from 'sequelize'
import { sequelize } from '../../database/db.js'

const dbMovies = sequelize.define('movies', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
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
    charactersId: {
        type: Sequelize.INTEGER
    }, 
    
},{
    timestamps: false
})


export default dbMovies