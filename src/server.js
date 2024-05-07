import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/testando-se-funfou-mesmo", (req, res) => {
    res.send("ÓIA QUE FUNFOU")
})

app.listen(3000, () => {
    console.log("APLICATIVO TA NO AR")
})

// Para executar, digite node server.js

//instalar a extensão Thunder Client