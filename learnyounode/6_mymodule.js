//Make It Modular
"use strict";
var fs = require("fs");
var path = require("path");
module.exports = function(dir, extension, callback){
  var ext2 = "." + extension;
  fs.readdir(dir, function(err, filenames) {
    if (err) {
      return callback(err);
    } else {
      var files = [];
      for (var i = 0; i < filenames.length; i++){
	var ext = path.extname(filenames[i]);
	if (typeof process.argv[3] !== "undefined"){
	if (ext === ext2) {
	    files.push(filenames[i]);
	  }
	} else {
	  filenames[i];
	    files.push(filenames[i]);
	}
      };
    }
      callback(null, files);
  });
}

