const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello node</title></head>')
    res.write('<body><h1>Hello Node</h1></body>')
    res.write('</html>');
    res.end(); //finaliza a resposta, depois daqui não pode mais usar res.write.

});

server.listen(3000);

