//Filtered ls
"use strict";

var fs = require("fs");
var path = require("path");
var directory = process.argv[2];
var ext1 = "." + process.argv[3];

fs.readdir(directory, function (err, filenames) {
  if(err){
    return console.error("error");
  }
  for (var i = 0; i < filenames.length; i++) {
    let ext = path.extname(filenames[i]);
    if (typeof process.argv[3] !== "undefined") {
      if (ext === ext1) {
	console.log(filenames[i]);
      }
    } else {
      console.log(filenames[i]);
    }
  }
});
