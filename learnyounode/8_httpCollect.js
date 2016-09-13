//HTTP Collect
"use strict"
var http = require("http");
var url = process.argv[2];
var output = [];
http.get(url, function(res) {
  res.setEncoding('utf8');
  res.on("data", function(chunk) {
    output.push(chunk);
  });
  res.on("end", function() {
    console.log(output.join("").length);
    console.log(output.join(""));
  });
}).on("error", (e) => {
  console.log(`Got error: ${e.message}`);
});
