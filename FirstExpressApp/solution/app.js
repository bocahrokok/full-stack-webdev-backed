var express = require("express");
var app = express();
app.get("/welcome", function(req, res){
	res.send("Hi there, welcome to my ass");
});
//using the dictionary to see the result 
app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof woff!",
		cat: "I hate you human",
	};
	var animal = req.params.animal.toLowerCase();
	var sound = sound[animal];
	res.send("The" + animal + "says" + sound );
});

app.get("/repeat/:message/:times", function(req, res){
	var message = req.params.message;
	var times = req.params.times;
	res.send("MessageL " + message +  "times" + times);
});

//listeing to the port
app.listen(3000, function(){
	console.log("now serving your appp!!!!");
});