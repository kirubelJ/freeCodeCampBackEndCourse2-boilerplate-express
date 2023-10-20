let express = require('express');
let app = express();

//challenge

console.log("Hello World");

//challenge

// app.get("/", function(req, res) {
//   res.send("Hello Express")

// });

//challenge 

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

//challenge 3

// Normal usage
// app.use(express.static(__dirname + "/public"));

// Assets at the /public route
// app.use("/public", express.static(__dirname + "/public"));


app.use("/public", express.static(__dirname + "/public"));

//Challenge 4
app.get("/json", function(req,res){
  res.json({"message": "Hello json"});
})
































module.exports = app;
