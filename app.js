var http = require("http");
var fs = require("fs");

const port = "3000";
const files = ["index.html"];

http
  .createServer(function (request, response) {
    console.log("connect");
    response.writeHead(200, { "Content-Type": "text/html" });
    files.forEach((el) => {
      response.write(fs.readFileSync(el), "utf-8");
    });
    response.end();
    console.log("disconnect");
  })
  .listen(port);
console.log(`Start http://127.0.0.1:${port}/`);