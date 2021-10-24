import express from 'express'
import movieRouter from './routes/moviesRoutes.js'
import characterRouter from './routes/charactersRoutes.js'

const app = express()
const PORT = 8080

app.use(express.json())

app.get("/", (req, res) => {
    return res.json({message: 'Bienvenidos!'})
})

app.use("/movies", movieRouter)
app.use("/characters", characterRouter)

const server = app.listen(PORT, () =>{
    console.log(`Servidor inicializado en puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))