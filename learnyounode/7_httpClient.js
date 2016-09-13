//HTTP Client
"use strict"
var http = require("http");
var url = process.argv[2];
var output = "";
http.get(url, function(res) {
  res.setEncoding('utf8');
  res.on("data", function(chunk) {
    output += chunk + "\n";
  });
  res.on("end", function() {
    console.log(output);
  });
}).on("error", (e) => {
  console.log(`Got error: ${e.message}`);
});
