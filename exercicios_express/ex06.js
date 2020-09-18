const express1 = require('express');
const express2 = require('express');

console.log(express1 === express2);

const server1 = express1()
const server2 = express1()

console.log(server1 === server2);

const router1 = express1.Router()
const router2 = express1.Router()
console.log(router1 === router2);

//NOTE a ideia é a refrência de express1 e express2 apontam para um mesmo local
//porém quando criamos instâncias do express1 para server1 e server2
//Cada um recebe uma instância diferente que aponta para outro local
//Mesma cosia acontece com os routers