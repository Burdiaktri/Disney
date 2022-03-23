import Router from "express";
const mailRouter = Router()
import {sendEmail} from '../controllers/mailController.js'

mailRouter.post('/send-email', sendEmail)

export default mailRouter
