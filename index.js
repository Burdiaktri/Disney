import app from './src/server.js'
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () =>{
    console.log(`Servidor inicializado en puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))