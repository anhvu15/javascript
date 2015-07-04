if (typeof DEBUG !== "undefined") {
	console.log("in debug mode");
}
var a = function(n){
	return(typeof n === "number" && window.isNaN(n));
};