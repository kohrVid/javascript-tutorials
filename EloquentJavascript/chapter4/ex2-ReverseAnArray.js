function reverseArray(arr) {
  return arr.reverse();
}

function reverseArrayInPlace(arr) {
  arr = arr.reverse();
  return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// // → [5, 4, 3, 2, 1]
