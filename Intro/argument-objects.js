function loopArguments(){
	for(var i = 0; i < arguments.length; i++){
		alert(arguments[i]);
	}
}

loopArguments(1,2,"hello world");