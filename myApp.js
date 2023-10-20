let express = require('express');
let app = express();

console.log("Hello World");

// app.get("/", function(req, res) {
//   res.send("Hello Express")

// });

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// Normal usage
// app.use(express.static(__dirname + "/public"));

// Assets at the /public route
// app.use("/public", express.static(__dirname + "/public"));


app.use("/public", express.static(__dirname + "/public"));

































module.exports = app;
