const mysql = require("mysql")

const conn = mysql.createPool({
    connectionLimit:10,
    host:"db",
    port:3306,
    user:"root",
    password:"admin",
    database:"frases"
})

module.exports = conn;