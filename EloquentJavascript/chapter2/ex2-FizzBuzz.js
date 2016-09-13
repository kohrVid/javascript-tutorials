var range = Array.apply(1, Array(101)).map(function (x, y) { return y + 1; });

for (var i in range){
  if (i % 15 === 0){
	 console.log("FizzBuzz");
  } else if (i % 3 === 0) {
	 console.log("Fizz");
  } else if (i % 5 === 0) {
	 console.log("Buzz")
  }
  else {
	 console.log(i);
  }
}
