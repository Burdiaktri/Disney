
import {Sequelize} from 'sequelize'
import {sequelize} from '../../database/db.js'



const dbUser = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.TEXT,
    },
    email: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
},
 {
    timestamps: false
})

export default dbUser