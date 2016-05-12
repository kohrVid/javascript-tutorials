//First I/O
"use strict";
//cat file | wc -l

var fs = require("fs");
var filename = process.argv[2];
//console.log("my argument is " +filename);

//node index.js /path/to/file
//use position #2 (3rd element)

var fileContent = fs.readFileSync(filename, "utf8");
//console.log("My file content" + fileContent);

var lines = fileContent.split("\n");
console.log(lines.length - 1);
