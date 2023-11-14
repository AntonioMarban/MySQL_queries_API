const mysql = require('mysql2')
const mysqlConfig = require('../helpers/mysql-config.js')

//Recurso

const getBranch = (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM branch WHERE branchNo = ?"
    const conexion = mysql.createConnection(mysqlConfig)
    conexion.query(sql, [id], (error, result, fields) => {
        if(error)
            res.json(error)
        res.json(result)
    })
}

const getBranches = (req, res) => {
    const sql = "SELECT * FROM branch"
    const conexion = mysql.createConnection(mysqlConfig)
    conexion.query(sql, (error, result, fields) => {
        if(error)
            res.json(error)
        res.json(result)
    })
}

const createBranch = (req, res) => {
    const body = req.body
    const sql = `INSERT INTO branch(branchNo, city, street, postcode)
    VALUES(?,?,?,?)`
    const conexion = mysql.createConnection(mysqlConfig)
    conexion.query(sql, [body.branchNo, body.city, body.street, body.postcode], (error, result, fields) => {
        if(error)
            res.json(error)
        res.json(result) // PARA TODAS LAS PETICIONES NECESITAMOS CUERPO, METODO Y ENDPOINT
    })
}

const deleteBranch = (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM branch WHERE branchNo = ?`
    const conexion = mysql.createConnection(mysqlConfig)
    conexion.query(sql, [id], (error, result, fields) => {
        if(error)
            res.json(error)
        res.json(result)
    })
}

const fullUpdateBranch = (req, res) => {
    const id = req.params.id
    const body = req.body
    const sql = `UPDATE branch SET city = ?, street = ?, postcode = ? WHERE branchNo = ?`
    const conexion = mysql.createConnection(mysqlConfig)
    conexion.query(sql, [body.city, body.street, body.postcode, id], (error, result, fields) => {
        if(error)
            res.json(error)
        res.json(result)
    })
}

module.exports = {getBranch, getBranches, createBranch, deleteBranch, fullUpdateBranch}