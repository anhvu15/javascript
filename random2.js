function alertRandom (lower,upper) {
	if (isNaN(lower) || isNaN(upper)) {
		throw new Error('invalid arguments');
	}
	var randomNumber = Math.floor(Math.random()* (upper - lower + 1)) + lower;
	return randomNumber;
	// alert("Your number is: "+randomNumber);
}

function getRectangleArea(width,length)
{
	return width*length;
}
var areaRectangle = getRectangleArea(10,20);
alert(alertRandom(0,'anh'));


