//Stylish CSS

var express = require("express");
var app = express();
var stylesheet = process.argv[3];
var path = require("path");
/*app.set("views", page);
app.set("view engine", "jade");
*/
app.use(require("stylus").middleware("public"))
app.use(express.static(stylesheet || path.join(__dirname, "public")));
app.get("/main.css", function(req, res) {
  //res.send("main.css");
});
//app.use(express.static(page || path.join(__dirname, "public")));
//app.listen(process.argv[2]);
app.listen(process.argv[2]);
