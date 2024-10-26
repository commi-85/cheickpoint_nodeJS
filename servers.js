/* 
- Dans cette tâche, vous allez :

créer un serveur  
Écrire un programme qui s’exécute sur le port 3000 et répond avec '<h1>Hello Node !!! </h1>\n’lorsque quelqu’un atteint http://localhost:3000
*/
var http = require("http");

http.createServer(function (request, response) {

    response.writeHead(200, { 'Content-Type': 'text/html' });


    response.end('<h1>Hello Node !!! </h1>');

}).listen(3000);


console.log('Server running at http://127.0.0.1:3000/') 
