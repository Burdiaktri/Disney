import { Router } from "express"
import { signUp, logIn, auth } from "../controllers/authcontroller.js"
import validateUser from "../middlewares/validator/users.js"
const UserRouter = Router()


UserRouter  
        .post('/signup', validateUser, signUp)
        .post('/login', validateUser, logIn)
        .get('/auth', auth)

export default UserRouter