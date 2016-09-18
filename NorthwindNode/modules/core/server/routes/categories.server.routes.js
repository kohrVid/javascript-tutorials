'use strict';

module.exports = function(app) {
  var categories = require("../controllers/categories.server.controller.js");
  app.route("/categories")
    .get(categories.list)
    .post(categories.create);

  app.route("/categories/:categoryId")
    .get(categories.read);
};
