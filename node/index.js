const express = require('express')
const mysql = require ('mysql')
require('dotenv').config()
const app = express()
const port = 3000

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
};

const connection = mysql.createConnection(config)

const sqlInsert = `INSERT INTO tb_people (name) values ('Shilton')`
connection.query(sqlInsert)
connection.end()


app.get('/',(req,res) => {
    res.send('Node - Shilton');
})

app.listen(port, () =>{
    console.log('Rodando na porta: ' + port)
})