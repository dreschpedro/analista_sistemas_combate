const http = require('http'); /* es un objeto */

// http.createServer(function (req, res) {
//     console.log('Corriendo en el puerto 3030');

//     res.writeHead(200, { "Conten-Type": "text/plain" }); //* tipo de contenido que se le envia al cliente
//     res.end('Mi primer server con Node') //* respuesta que se muestra en el body
// 
// }).listen(3030, 'localhost'); //* localhost:3030


// Trabajando el <Request>

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    // (req.url == '/') ? res.end('Estas en la pagina de inicio') : '';
    // (req.url == '/saludo') ? res.end('Saludos, Terricola !') : '';


    switch (req.url) {
        case '/':
            res.end('Estas a punto de triunfar');
            break;
        case '/saludo':
            res.end('Que pasa chaval ?');
            break;
        default:
            res.end('No podemos encontrar ese planeta');
            break;
    }
}).listen(3030, 'localhost');