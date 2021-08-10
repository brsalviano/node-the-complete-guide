const http = require('http');
const routes = require('./routes');

// Passando a função importada para o servidor...
const server = http.createServer(routes);

server.listen(3000);

