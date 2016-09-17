var mongodb = require("mongodb");
var mongoose = require("mongoose");
var schema = require("./schema.js");


var uri = "mongodb://localhost:27017/test";
mongoose.connect(uri);
var User = mongoose.model("User", schema, "users");

var user = new User({
  name: "Joan Smith",
  email: "joan@smith.io"
});

user.save(function (error) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  User.find({ email: "joan@smith.io"}, function (error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    console.log(require("util").inspect(docs));
    process.exit(0);
  });
});

mongodb.MongoClient.connect(uri, function (error, db) {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  var doc = {
    title: "Jaws",
    year: 1975,
    director: "Steven Spielberg",
    rating: "PG",
    ratings: {
      critics: 80,
      audience: 97
    },
    screenplay: ["Peter Benchley", "Carl Gotlieb"]
  };

  db.collection("movies").insert(doc, function (error, result){
    if (error) {
      console.log(error);
      process.exit(1);
    }
    
    var query = { year: 1975, rating: "PG" };
    var query2 = { "ratings.audience": { "$gte": 90 } };

    db.collection("movies").find(query2).toArray(function (error, docs) {
      if (error) {
	console.log(error);
	process.exit(1);
      }

      console.log("Found docs:");
      docs.forEach(function(doc) {
	console.log(JSON.stringify(doc));
      });
      process.exit(0);
    });

  });
});
