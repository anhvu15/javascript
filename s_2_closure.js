function buildCoveTicketMaker(transport){
	var passengerNumber = 0;
	return function(name){
		passengerNumber++;
		alert("Here is your transportation via "+transport+
			"\nWelcome to the Cold Closures Cove, "+name+" !"+
			"\n You are passenger #"+ passengerNumber+"." );
	}
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");
getSubmarineTicket("Anh");
getSubmarineTicket("Vu");
getSubmarineTicket("Tuan");

var getAirplaneTicket = buildCoveTicketMaker("Airplan");
getAirplaneTicket("Linh");
getAirplaneTicket("nguyen");
