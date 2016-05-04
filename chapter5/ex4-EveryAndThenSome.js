/*Not sure how to do this using forEach() and so have written this hack instead*/
function every(arr, f){
  var verify = [];
  for (var i in arr){
    verify.push(f(arr[i]))
  }
  var check = true;
  for (var i in verify){
    if (verify[i] === false){ 
      check = false;
    }
  }
  return check;
}

function some(arr, f){
  var verify = [];
  for (var i in arr){
    verify.push(f(arr[i]))
  }
  var check = false;
  for (var i in verify){
    if (verify[i] === true){ 
      check = true;
    }
  }
  return check;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true

console.log(every([NaN, NaN, 4], isNaN));
// // → false
console.log(some([NaN, 3, 4], isNaN));
// // → true
console.log(some([2, 3, 4], isNaN));
// // → false
// 
