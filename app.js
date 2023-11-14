// Importa libreria express para crear una aplicación express
const express = require('express')
const branch = require('./routes/branch.js')

// Define 

const app = express()
const port = process.env.PORT

// Se encarga de que la app reconozca el formato .json en los datos del body de la POST request
app.use(express.json())

app.use('/branch', branch)



app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto: ${port}`)
})