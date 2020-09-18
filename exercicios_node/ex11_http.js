const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Acho melhor utilizar Express!</h1>")
})

const porta = 3456;

server.listen(porta, () => {
    console.log("Escutando porta: " + porta);
})