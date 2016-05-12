//Baby steps
"use strict";
let arr = process.argv.slice(2);
let sum = 0;
for(let i = 0; i < arr.length; i++){
  sum += +arr[i];
  //adding the "+" converts a string to a number    
}
console.log(sum);
