const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hey I am Root/Home Page</h1>");
});

app.get("/info", (req, res) => {
  //   res.send("<h1>I am Info Page</h1>");
  //   res.sendFile("D:/entri-fsd/nodePractice/base.html");
  res.sendFile(path.join(__dirname, "base.html"));
});

app.get("/about", (req, res) => {
  //   res.send("<h1>I am About Page</h1>");
  res.send({ name: "Anusha", place: "Bangalore" });
});

app.get("/greeting/:name", (req, res) => {
  let name = req.params.name;
  res.send("<h2>Hello " + name + "," + " How are You?</h2>");
});
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
