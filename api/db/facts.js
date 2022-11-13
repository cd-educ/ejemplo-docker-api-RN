const conn = require("./conn");

function obtenerFrase(){

    return new Promise((resolve, reject) => {

        conn.query("SELECT * from frases ORDER BY id DESC LIMIT 1", function(err, rows, fields) {
            if(err){
                return reject(err);
            }
            return resolve(rows[0].frase);
        });

    })

}

function guardarFrase(frase){

    return new Promise((resolve, reject) => {

        conn.query("INSERT INTO frases (frase) VALUES (?)", [frase], function(err, rows, fields) {
            if(err){
                return reject(err);
            }
            return resolve(rows);
        });

    })

}

module.exports = {
    guardarFrase:guardarFrase,
    obtenerFrase:obtenerFrase
}