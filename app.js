const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Digite a mensagem</title></head>')
        res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Enviar</button></form></body>')
        res.write('</html>');
        return res.end(); //usamos return para a execução finalizar aqui e a resposta ser devolvida.
    }

    if (url === '/message' && method === 'POST') {
        //Trabalhando com streams e buffer para ler o corpo da requisição.
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
             //junta os chunks e converte em string
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]; //pegar apenas o conteúdo
            fs.writeFileSync('message.txt', message); //Escrevendo a mensagem no arquivo message.txt
        })
        
        //passo a passo para fazer um redirecionamento na mão...  
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello node</title></head>')
    res.write('<body><h1>Hello Node</h1></body>')
    res.write('</html>');
    res.end(); 

});

server.listen(3000);

