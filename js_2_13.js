// function SignalFire (ID,startingLogs) {
// 	this.ID = ID;
// 	this.logLeft = startingLogs;
// 	}
// SignalFire.prototype = {
// 	addLogs:  function (numLogs){
// 		this.logLeft += numLogs;
// 	},
// 	lightFire: function() {
// 		alert("Whooosh!");
// 	},
// 	smokeSignal: function(message){
// 		if (this.logLeft < message.length / 10){
// 			alert("Not enough fuel to send");
// 		}
// 		else
// 		{
// 			this.lightFire();
// 			var x = message.length;
// 			for(var i = 0; i < x;i++){
// 				alert(message[i]);
// 				if (i % 10 == 0 && i !=0) {
// 					this.logLeft--;
// 				}
// 			}

// 		}
// 	}
// }

// var fireOne = new SignalFire(1,20);
// fireOne.smokeSignal("Anh");

//Adding individual dom elements 
var kotw = ["Anh","Tuan","Vu"];
var list = document.getElementById('av');
for(var i = 0; i < kotw.length; i++){
	var element = document.createElement('li');
	element.appendChild(document.createTextNode(kotw[i]));
	list.appendChild(element);
}