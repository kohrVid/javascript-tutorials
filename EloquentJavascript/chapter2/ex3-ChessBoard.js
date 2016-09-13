var size = 8;

for (var i = 0; i < size; i++){
  var row = "";
  var j;
  if (i % 2 === 0){
    for (j = 0; j < size; j++){
	   if (j % 2 === 0){
		  row += "#";
	   } else {
		  row += " ";
	   }
    }
  } else {
    for (j = 1; j < size+1; j++){
	   if (j % 2 === 0){
		  row += "#";
	   } else {
		  row += " ";
	   }
    }
  }
  console.log(row);
}
