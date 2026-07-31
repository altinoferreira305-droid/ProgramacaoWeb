import express from 'express'  //TYPE MODULE
// const express = requere("express") // Type common JS

// inicializando o express - new
const app = express()

app.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    //const recebe um valor uma vez  e nao muda mais  const exemplo = "batata"
    //let pode ser alterada  exemploAlterar = 0  depois muda para exemploAlterar = "batata"
    //var e um bug no sistema javascrips
    res.send({ "message": num1 + num2 })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})