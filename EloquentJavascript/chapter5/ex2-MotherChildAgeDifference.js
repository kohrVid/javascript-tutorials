var ANCESTRY_FILE = require("./ancestry.js");
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
	   return (array.reduce(function(a,b){ 
		  return a+b;
		}) / array.length).toFixed(1);
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ageDifference = [];
ancestry.forEach(function(person) {
  if (typeof byName[person.mother] != "undefined") {
	 ageDifference.push(person.born - byName[person.mother].born);
  }
});

console.log(average(ageDifference));

// // → 31.2
