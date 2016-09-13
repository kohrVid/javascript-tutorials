function arrayToList(arr) {
  var list = {};
  list.rest = { value: arr[arr.length - 1], rest: null };
  for (var i = arr.length - 2; i >= 0; i--){
	 sublist = { value: arr[i], rest: list.rest };
	 list.rest = sublist;
  }
  list = list.rest;
  return list;
}

function listToArray(list) {
  var arr = [];
  arr.push(list.value);
  while (list.rest !== null){ 
	 arr.push(list.rest.value);
	 list = list.rest;
  }
  return arr;
}

function prepend(number, restList) {
  return { value: number, rest: restList };
}

function nth(list, n) {
  var arr = [];
  arr.push(list.value);
  while (list.rest !== null){ 
	 arr.push(list.rest.value);
	 list = list.rest;
  }
  return arr[n];
}


console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20
