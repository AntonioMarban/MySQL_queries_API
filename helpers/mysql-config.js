const mysql = require('mysql2')

const config = {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT,
    dateStrings: true
}

// *************QUITAR LOS '||' SI SE QUIERE SUBIR A GITHUB*************************

module.exports = config