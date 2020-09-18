const express = require('express');
const server = express();

//NOTE USE consegue acessar o /api/qualquercois   DIFERENTE do GET que não consegue acessar o prefixo

server.use("/api", function(req, res, next){
    console.log("Inicio...");
    next();
    console.log("Fim");
})

server.use("/api", function(req, res){
    console.log("Resposta...");
    res.send("<h1>Olá Api!</h1>")
    
})

server.listen(3000, () =>{
    console.log("Executando !");
})