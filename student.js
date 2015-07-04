/* Object of student
	Name
	Track IOS, Web Design, Front End Development
	Atchievements : ( should hold number of value)
	Points : hold number of points a student has earned

	create 5 student objects*/
function displayStudent(student){
	var html = "<article>";
	html +="<h2> Student: "+student.name+ "</h2>";
	html +="<p>Track :"+student.track+" </p>";
	html +="<p>Achievements :"+student.achievements+" </p>";
	html +="<p>Points :"+student.points+" </p>";
	html +="</article>";
	return html;
}

function print(message){
	var elementID = document.getElementById('output');
	elementID.innerHTML = message;
}
function searchName(name,students){
	var counter = 0;
	var foundedStudents= [];
	while (counter < students.length)
	{
		if (students[counter].name == name){
			foundedStudents.push(students[counter]);
		}
				
		counter += 1;

	}
	return foundedStudents;
}
var student1 ={ name : "Anh",
				track : "IOS Development",
				achievements : 156,
				points : 3000};
var student2 = {  name : "Anh",
				  track : "Web Design",
				  achievements : 256,
				  points : 2500};
var student3 = {  name : "Tuyen Vu",
				  track : "Java Development",
				  achievements : 423,
				  points : 4524};
var student4 = {  name : "Thao Vu",
				  track : "C# Development",
				  achievements : 234,
				  points : 7455};
var student5 = {  name : "Kiet Vu",
				  track : "C++ Development",
				  achievements : 300,
				  points : 3500};

var students = [student1,student2,student3,student4,student5];
var html =;
var input ;
var index ;
do{
	html = "";
	input = prompt("Enter stdent name or 'quit' to exit");
	if (input === 'quit'){
		break;
	}
	index = searchName(input,students);

	if ( index.length > 0) {
		for (var i = 0; i < index.length; i++) {
			html += displayStudent(index[i]);
		}
		
	} else {
		alert("No student record for student name: "+input);
	}
	print(html);
}while(input !='quit');




				