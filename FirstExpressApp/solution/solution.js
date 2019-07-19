var express = require("express");

var app = express();

app.get("/welcome", function(req, res){
	res.send("Hi there, welcome to my ass");
});


app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal;
	var sound = " ";
	if(animal === "pig"){
		sound = "pig!";
	} else if (animal=="cow"){
		sound = "moo";
	}
	res.send("The" + animal + "says" + sound );
});

app.listen(3000, function(){
	console.log("now serving your appp!!!!")
});