import { Router } from "express"
import { signUp, logIn, auth } from "../controllers/authcontroller.js"
import verifyToken from '../controllers/verifyToken.js'
const UserRouter = Router()


UserRouter  
        .post('/signup',  signUp)
        .post('/login', logIn)
        .get('/auth', auth)

export default UserRouter