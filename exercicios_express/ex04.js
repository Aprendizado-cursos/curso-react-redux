const express = require('express');
const server = express();

//NOTE ROUTE é um jeito reduzido e adicionar requisições para uma mesma rota

server.route('/clientes')
    .get((req, res) => {
        res.send("Lista de Clientes");
    })
    .post((req, res) => {
        res.send("Novo Cliente");
    })
    .put((req, res) => {
        res.send("ALterar Cliente");
    })
    .delete((req, res) => {
        res.send("Remove Cliente");
    });


server.listen(3000, () => {
    console.log("Executando !");
})