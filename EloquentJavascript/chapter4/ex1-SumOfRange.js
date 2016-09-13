function range(start, end, step){
  step || (step = 1);
  list = [];
  if (start < end) {
	 for (start; start <= end; start += step){
		list.push(start);
	 }
  } else {
	 for (start; start >= end; start += step){
		list.push(start);
	 }
  }
  return list;
}

function sum(array) {
  return array.reduce(function(i, j){
	 return i + j;
  });
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
