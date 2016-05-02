function deepEqual(object1, object2) {
  if ((typeof(object1) === "object" && object1 != null)
		&& (typeof(object2) == "object" && object2 != null)) {
	 var result;
	 for (var i in object1){
		if (object1[i] == object2[i]) {
		  result = true;
		} else {
		  for (var j in object1[i]){
			 if ((typeof object1[i][j] !== "undefined" && typeof object2[i][j] !== "undefined")
				  && (object1[i][j] == object2[i][j])) {
				result = true;
			 } else {
				return result = false;
			 }
		  }
		}
	 }
	 return result;
  }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true
