//Good Old Form

var express = require("express");
var path = require("path");
var bodyparser = require("body-parser");

var app = express();

app.use(bodyparser.urlencoded({extended: false}));
 app.use(express.static(path.join(__dirname, "public")));
/*
app.get("/form", function(req, res) {
  res.setHeader("content-type", "text/html");
 // res.end("Name: <form method = 'POST'><input type = 'text' name = 'str' />");
});*/
app.post("/form", function(req, res){
  var pizza = req.body.str.split("").reverse().join("");
  res.send(pizza);
});

//app.listen(process.argv[2]);
app.listen(3000);
