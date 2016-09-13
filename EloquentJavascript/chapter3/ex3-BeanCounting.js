function countBs(str) {
  var count = 0;
  for (var i = 0; i < str.length; i ++){
	 str.charAt(i) === "B" ? count++ : count;
  }
  return count;
}

function countChar(str, substr) {
  var count = 0;
  for (var i = 0; i < str.length; i ++){
	 str.charAt(i) === substr ? count++ : count;
  }
  return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

/*
 * Using splits
function countBs(str) {
  return str.split("B").length - 1;
}

function countChar(str, substr) {
  return str.split(substr).length - 1;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
*/
