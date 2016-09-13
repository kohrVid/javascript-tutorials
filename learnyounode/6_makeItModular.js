//Make It Modular
"use strict";

var directory = process.argv[2];
var ext1 = process.argv[3];
const mymodule = require('./6_mymodule.js');
mymodule(directory, ext1, function(err, files){
  if (err){
    console.log("Error!");
  } else {
    for (var i = 0; i < files.length; i++){
      console.log(files[i]);
    }
  }
});
