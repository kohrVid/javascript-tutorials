var http = require("http");

http.createServer(function(req, res) {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });
  var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch(path) {
    case "":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Homepage");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      break;
  }
}).listen(8081);

console.log("Server started on localhost:8081\nPress Ctrl-C to terminate...");
