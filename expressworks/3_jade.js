//Jade

var express = require("express");
var app = express();
var page = process.argv[3];
var path = require("path");
app.set("views", page);
app.set("view engine", "jade");
app.get("/home", function(req, res) {
  res.render("index", {date: new Date().toDateString()});
});
app.listen(process.argv[2]);
