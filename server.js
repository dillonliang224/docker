const http = require('http');
const PORT = 8081;

const server = http.createServer(function (req, res) {
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	res.end('Hello World');
});

server.listen(PORT, function () {
	console.log('Docker Demo with Node.js is running in ' + PORT);
});