'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/*
 * Validation
 */
function validateLength (v) {
  //custom validatino function for checking string length
  return v.length <= 15;
}
/**
 * Category Schema
 */
var CategorySchema = new Schema({
  // Category model fields
  //the property name
  created: {
    //types are defined
    type: Date,
    //default values can be set
    default: Date.now
  },
  description: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    default: "",
    trim: true,
    unique: true,
    //make this a required field
    required: "name cannot be blank",
    //wires in a custom validator function
    validate: [validateLength, "name must be 15 chars in length or less"]
  }
});

//expose model to other object (like a public setter)
mongoose.model('Category', CategorySchema);
