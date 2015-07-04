function randomNumber (upper) {
	return Math.floor(Math.random()*upper) +1;
}
var target = randomNumber(10000);
var count = 0;
var founded = false;
document.write("<p> The random numnber was: "+target+"</p>");
var guess;
do{
	 guess = randomNumber(10000);
	// alert(guess);
	count +=1;
	if (guess == target) {
		founded = true;
		
	}
}while(!founded);
document.write("<p> It took the computer "+count+" attempts to get it right</p>");
document.write("<p> Final guess number "+guess+"</p>");