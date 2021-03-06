var express = require("express");

var app = express();

var handlebars = require("express3-handlebars")
  .create({ 
     defaultLayout: "main",
     helpers: {
       section: function (name, options) {
	 if(!this._sections) this_sections = {};
	 this._sections[name] = options.fn(this);
	 return null;
       }
   } 
});
var fortune = require("./lib/fortune.js");
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(function (req, res, next) {
  res.locals.showTests = app.get("env") !== "production" &&
    req.query.test === "1";
  next();
});

app.set("port", process.env.PORT || 8081);

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/about", function (req, res) {
  res.render("about", { 
    fortune: fortune.getFortune(),
    pageTestScript: "/qa/tests-about.js"
  });
});

app.get("/tours/hood-river", function (req, res) {
  res.render("tours/hood-river");
});

app.get("/tours/request-group-rate", function (req, res) {
  res.render("tours/request-group-rate");
});

app.use(function (req, res) {
  res.status(404);
  res.render(404);
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render(500);
});

app.listen(app.get("port"), function () {
  console.log("Express started on http://localhost:" + 
      app.get("port") + "\nPress Ctrl-C to terminate.");
});
