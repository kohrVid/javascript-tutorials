//Static

var express = require("express");
var app = express();
var page = process.argv[3];
app.use(express.static(page || path.join(__dirname, "public")));
app.listen(process.argv[2]);
