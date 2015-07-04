var family ={
	dad: "Tam",
	mom: "Hoa",
	wife: "Linh",
	sister: "Tuyen",
	sister: "Thao",
	brother: "Kiet"
};

// Traverse though an object with for in

for(var person in family){
	alert("The "+person+" is "+ family[person]);
}