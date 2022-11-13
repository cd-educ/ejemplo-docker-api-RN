const express = require('express')
const app = express()
const port = 8001

const {guardarFrase, obtenerFrase} = require("./db/facts");

app.use(express.json());

app.get('/facts', (req, res) => {

    obtenerFrase()
        .then((frase) => {
            res.status(200).json({status:200, fact:frase})
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({status:500})
        })


})

app.post("/facts", (req, res) => {

    let frase = req.body.fact;
    guardarFrase(frase)
        .then(() => {
            res.status(200).json({status:200})
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({status:500})
        })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})