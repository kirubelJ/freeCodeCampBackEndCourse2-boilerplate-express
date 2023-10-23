let express = require('express');
let app = express();
require('dotenv').config()

//challenge 1

console.log("Hello World");
//

//challenge 4

// Normal usage
// app.use(express.static(__dirname + "/public"));

// Assets at the /public route
// app.use("/public", express.static(__dirname + "/public"));

app.use("/public", express.static(__dirname + "/public"));
//

//challenge 7
app.use(function middleware(req, res, next) {
  // console.log(req.method);
  // console.log(req.path);
  // console.log(req.ip);
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
//

//challenge 2

// app.get("/", function(req, res) {
//   res.send("Hello Express")

// });
//

//challenge 3

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
//



// //Challenge 5
// app.get("/json", function(req,res){
//   res.json({"message": "Hello json"});
// })
//

//Challenge 6
app.get("/json", function(req, res) {
  if (process.env["MESSAGE_STYLE"] == "uppercase") {
    res.json({ "message": "Hello json".toUpperCase() });
  } else {
    res.json({ "message": "Hello json" });
  }
})
//
































module.exports = app;
