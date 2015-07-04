//Comment a single line
/* Commement multiple line of codes
this should be done by a programmer */
var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = parseInt(prompt("Enter the number between 1 and 6"));
if (guess === randomNumber){
	correctGuess = true;
	}
else if (guess < randomNumber)
{
	var largerGuess = parseInt(prompt("My Number is larger! please try again by enter the number from 1 to 6"));
	if (largerGuess=== randomNumber)
	{
		correctGuess = true;
	}
}
else
{
	var lesserGuess = parseInt(prompt("My Number is smaller! please try again by enter the number from 1 to 6"));
	if (lesserGuess === randomNumber)
	{
		correctGuess = true;
	}
}
//Final if condition	
if (correctGuess){
document.write("<p>You guessed the correct number</p>");
}
else{
	document.write("<p>Sorry. The number was "+randomNumber+"</p>");
}