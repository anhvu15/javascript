for(var i = 1 ; i < 9; i++){
	var line = "";
	for(var j = 1; j < 9;j++){
		if (i % 2 != 0){
				if(j % 2 != 0){
					line +="#";
				}
				else{
					line +=" ";
				}
			}
		else{
				if(j % 2 !=0){
					line +=" ";
				}
				else{
					line +="#";
				}
			}
		}
	 	console.log(line);
	 }