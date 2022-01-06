
import {Sequelize} from 'sequelize'
import {sequelize} from '../../database/db.js'
import bcrypt from 'bcryptjs'

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
        type: Sequelize.TEXT
    },
},
{
    instanceMethods: {
        encryptPassword(password) {
            return bcrypt.hash(password, bcrypt.genSaltSync(8))
        },
        validPassword(password) {
            return bcrypt.compare(password, this.password)
        }
    }
    },{
    timestamps: false
})

export default dbUser