var express = require("express");

var app = express();

app.get("/welcome", function(req, res){
	res.send("Hi there, welcome to my ass");
});


app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof woff!",
		cat: "I hate you human",
	},
	var animal = req.params.animal;
	var sound = sound[animal];

	res.send("The" + animal + "says" + sound );
});

app.listen(3000, function(){
	console.log("now serving your appp!!!!");
});