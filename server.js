const http = require("http");
const fs = require("fs");
const url = require("url");
let port = process.argv[2];

!port && (port = 8888);

const server = http.createServer((request, response) => {
	const parsedUrl = url.parse(request.url, true);
	const pathWithQuery = request.url;
	let queryString = "";
	if (pathWithQuery.indexOf("?") >= 0) {
		queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"));
	}
	console.log(queryString);
	const path = parsedUrl.pathname;
	const query = parsedUrl.query;
	const method = request.method;

	if (path === "/") {
		const string = fs.readFileSync("./index.html");
		response.statusCode = 200;
		response.setHeader("Content-type", "text/html");
		response.write(string);
		response.end();
	} else if (path === "/main.js") {
		const string = fs.readFileSync("./main.js");
		response.statusCode = 200;
		response.setHeader("Content-Type", "application/javascript");
		response.write(string);
		response.end();
	} else if (path === "/xxx") {
		const string = fs.readFileSync("./info.json");
		response.statusCode = 200;
		response.setHeader("Content-Type", "application/xml");
		response.write(string);
		response.end();
	} else {
		response.statusCode = 404;
		response.setHeader("Content-Type", "text/html");
		response.write("not found");
		response.end();
	}
});

server.listen(port);
console.log("http://localhost:" + port);
