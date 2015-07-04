var question1 = "Who is the best programmer?";
var ANSWER1 = "anh";
var question2 = "Where is the capital of Vietnam?";
var ANSWER2 = "Hanoi";
var question3 = "What is the US currency?";
var ANSWER3 = 'USD';
var question4 = "What is the smallest number";
var ANSWER4 = 1;
var question5 = "Who is the most highest paid programmer?";
var ANSWER5 = "Lenone";
var correctGuess = 0;
var guess1 = prompt(question1);
if (guess1.toUpperCase()===ANSWER1.toUpperCase()) {correctGuess +=1}
var guess2 = prompt(question2);
if (guess2.toUpperCase()===ANSWER2.toUpperCase()) {correctGuess +=1}
var guess3 = prompt(question3);
if (guess3.toUpperCase()===ANSWER3.toUpperCase()) {correctGuess +=1}
var guess4 = prompt(question4);
if (parseInt(guess4)===ANSWER4) {correctGuess +=1}
var guess5 = prompt(question5);
if (guess5.toUpperCase()===ANSWER5.toUpperCase()) {correctGuess +=1}
document.write("<p>you got "+correctGuess+" correct answers </p>");
if (correctGuess > 4){
	document.write("<p>you got Gold Crown</p>");
}
else if (correctGuess >2) {
	document.write("<p>you got Silver Crown</p>");
}
else if (correctGuess > 0) {
	document.write("<p>you got Bronze Crown</p>");
}
else{
	document.write("<p>Sorry ! You have no Crown</p>");
}