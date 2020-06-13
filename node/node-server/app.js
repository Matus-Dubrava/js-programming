const http = require('http');

const router = require('./routes');

const server = http.createServer((req, res) => {
	router(req, res);
});

server.listen(5000, () => {
	console.log(`server listening on port 5000`);
});
