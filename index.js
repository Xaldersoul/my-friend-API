const { EAFNOSUPPORT } = require("constants")
const http = require("http")

const server = http.createServer((request, response) => {
    console.log(request.url)

    switch (request.url) {

        case "/":
            response.writeHead(200, { "Content-type": "application/json" })
            // response.statusMessage("OK")
            response.end(JSON.stringify("Hola mundo"))
            break;
        default:
            response.writeHead(404);
            response.end("nada encontrado")

    }

})

server.listen(3073, () => {
    console.log("servidor operativo en puerto 3000")
})