'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  Category = mongoose.model('Category');

/**
 * Globals
 */
var category;

/**
 * Unit tests
 */
describe('Category Model Unit Tests:', function() {
  describe('Method Save', function() {
    it('should be able to save without problems', function(done) {
      var category = new Category({
	name: "Beverages",
	description: "Soft drinks, coffees, teas, beers and ales"
      });

      category.save(function(err) {
        should.not.exist(err);
        done();
      });
    });

    it("throws validation error when name is empty", function (done) {
      var category = new Category({
	description: "Soft drinks, coffees, teas, beers and ales"
      });

      category.save(function(err) {
        should.exist(err);
	err.errors.name.message.should.equal("name cannot be blank");
        done();
      });
    });

    it("throws validation error when name is longer than 15 chars", function (done) {
      var category = new Category({
	name: "Grain/Cereals/Chocolates"
      });

      category.save(function (err, saved) {
	should.exist(err);
	err.errors.name.message.should.equal("name must be 15 chars in length or less");
	done();
      });
    });

    it("throws validation error for duplicate category name", function (done) {
      var category = new Category({
	name: "Beverages"
      });

      category.save(function (err) {
	should.not.exist(err);

	var duplicate = new Category({
	name: "Beverages"
	});

	duplicate.save(function (err) {
	  err.message.indexOf("$name").should.not.equal(-1);
	  err.message.indexOf("duplicate key error").should.not.equal(-1);
	  should.exist(err);
	  done();
	});
      });
    });
  });

  afterEach(function(done) {
    Category.remove().exec();

    done();
  });
});
