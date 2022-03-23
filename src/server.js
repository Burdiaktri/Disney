import express from 'express'
import morgan from 'morgan'

import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import dotenv from 'dotenv'
dotenv.config()
import {errorHandlerMiddleware} from './middlewares/errorHandler.js'
import moviesRouter from './routes/moviesRoutes.js'
import charactersRouter from './routes/charactersRoutes.js'
import UserRouter from './routes/authRoutes.js'
import mailRouter  from './routes/mailRoutes.js';


const app = express()


app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (_, res) => {
	return res.json({message: 'Welcome'})
})

app.use("/movies", moviesRouter)
app.use('/characters', charactersRouter)
app.use('/jwt', UserRouter )
app.use('/contact', mailRouter )
app.use(errorHandlerMiddleware)

export default app