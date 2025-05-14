const httpmod = require("http");
const fsmod = require("fs");
const course = { name: "FSD", platform: "Entri", tutor: "VB" };
const server = httpmod.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  //   res.end("<h1>Hello NodeJs</h1>");
  //   res.end(JSON.stringify(course));
  //   res.end(req.url);
  if (req.url === "/") {
    // res.end("Root/Home");
    const content = fsmod.readFileSync("./base.html", "UTF-8");
    res.end(content);
  } else if (req.url === "/info") {
    res.end("Info");
  } else if (req.url === "/about") {
    res.end("About");
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
