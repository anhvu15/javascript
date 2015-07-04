for(var i = 1; i < 101; i++){
	var output = "";
	if (i % 3 == 0) {
		output += "Fizz";
	}
	if (i % 5 == 0){
		output += "Buzz";
	}
	// console.log(output||i);
	if(output){
		console.log(output);
	}
	else
	{
		console.log(i);
	}
}