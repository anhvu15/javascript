function sumThing(){
	var sum = 0;
	for(var i = 0,argCount = arguments.length; i < argCount; i++){
		if (! isNaN(arguments[i]))
		sum += arguments[i];
	}
	return sum;

}

alert(sumThing(1,2,3,4,5,"hello"));