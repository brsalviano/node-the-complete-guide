const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    process.exit(); //Encerra o event-loop e portanto encerra o programa.
});

server.listen(3000);

