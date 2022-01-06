import { Router } from "express"
import { signUp, logIn, auth } from "../controllers/authcontroller.js"
const UserRouter = Router()

UserRouter  
        .post('/signup', signUp)
        .post('/login', logIn)
        .get('/', auth)

export default UserRouter