$(document).ready(function(){
	$("#newPerson").on('click',function(){
		
		var Jim = new Person();

		var name = getName(Jim.sex);
		console.log(name);
		$(".age").next().text(Jim.age);
		$(".sex").next().text(name);
		$(".weight").next().text(Jim.weight);
		

	});
});




function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
function getName(sex){
	 
	if (sex == "male"){
		
		firstName = ["Joe", "Jim", "Jerry", "Josh", "Jake","Janus", "Jan", "Jimmy", "Jacob", "Jack"];
		lastName = ["Johnson", "Johannson", "Jeb", "James", "Smith", "Swanson", "Swann", "Sampsonite", "Shchuman"];
		var fullName = firstName[randomNumber(1,firstName.length-1)] + " " + lastName[randomNumber(1,lastName.length-1)];
	}	
	else {
		firstName = ["Sarah", "Susan", "Sharon", "Samantha", "Sandy", "Sandra", "Shaleen","Sherry", "Cynthia", "Suzy"]
		lastName = ["Sarandon", "Sampson", "Simpson", "Smith", "James","Swanson","Sanderson", "Johnson", "Sampsonite","Schuman"]
		var fullName = firstName[randomNumber(1,firstName.length-1)] + " " + lastName[randomNumber(1,lastName.length-1)];
		console.log()
	}

	return fullName;
}



function Person (){
	var sex = randomNumber(1,2);
	if (sex == 1){
		sex = "male";
		}
		else{
			sex = "female";
		}


	this.age = randomNumber(1,100);
	this.sex = sex;
	this.weight = randomNumber(1,100);


}

