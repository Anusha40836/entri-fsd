const httpmod = require("http");

httpmod
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World, Welcome to NODEJS");
  })
  .listen(8080, () => {
    console.log(" server is running on http://localhost:8080");
  });
