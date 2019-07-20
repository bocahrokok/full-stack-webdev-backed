var express = require("express");

var app = express();
app.get("/", function(req, res){
	res.render("home.js");
});

app.get("/fallinlovewith/:thing", function(res, req){
	var thing = req.params.thing;
	res.render("love.ejs");
});

app.listen(3000, function(){
	console.log("Server is listening!!!");
});

