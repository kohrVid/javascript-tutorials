var ANCESTRY_FILE = require("./ancestry.js");
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  return (array.reduce(function(a,b){ 
	 return a+b;
  }) / array.length).toFixed(1);
}

var century = {};
ancestry.forEach(function(person) {
  if (!(Math.ceil(person.died / 100) in century)){
	 century[Math.ceil(person.died / 100)] = [];
  }
  century[Math.ceil(person.died / 100)].push(person.died - person.born);
});

/*
 * 3/05/16: Not sure how to add the groupBy() function Haverbeke mentions and will try again later.
 */
var averageCentury = {}
for (var i in century){
  averageCentury[i] = average(century[i]);
};

console.log(averageCentury);

// // → 16: 43.5
// //   17: 51.2
// //   18: 52.8
// //   19: 54.8
// //   20: 84.7
// //   21: 94
