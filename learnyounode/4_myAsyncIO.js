//Asynchronous Read
"use strict";
var fs = require("fs");
var filename = process.argv[2];
fs.readFile(filename, "utf8", function(err, data){
  if(err){
    return console.error("error");
  }
  console.log(data.split("\n").length - 1)
});
    //asynchronous file reading...the last argument is a function here - it's a callback. It should itself take two params (the error is the first and sucess is the second)
    //all files are streams in node.js. so are http requests
