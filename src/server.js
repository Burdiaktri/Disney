import express from 'express'
import morgan from 'morgan'


import dotenv from 'dotenv'
dotenv.config()
import {errorHandlerMiddleware} from './middlewares/errorHandler.js'
import moviesRouter from './routes/moviesRoutes.js'
import charactersRouter from './routes/charactersRoutes.js'
import UserRouter from './routes/authRoutes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (_, res) => {
	return res.json({message: 'Welcome'})
})

app.use("/movies", moviesRouter)
app.use('/characters', charactersRouter)
app.use('/jwt', UserRouter )
app.use(errorHandlerMiddleware)

export default app