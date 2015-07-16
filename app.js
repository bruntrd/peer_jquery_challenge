$(document).ready(function(){
	$("#newPerson").on('click',function(){
		
		var Jim = new Person();
		$(".age").next().text(Jim.age);
		$(".sex").next().text(Jim.sex);
		$(".weight").next().text(Jim.weight);
		

	});
});


function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
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

