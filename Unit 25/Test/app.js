var express = require("express");
var app = express();
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
app.get("/", function(req, res){
    res.send("Hi There! Welcome to my assignment!");
});
app.get("/", function(req, res){
    res.send("Hi There! Welcome to my assignment!");
});
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    if(animal === "pig"){
        res.send("The pig says 'Oink'");
    }
    if(animal === "cow"){
        res.send("The cow says 'Moo'");
    }
    if(animal === "dog"){
        res.send("The pig says 'Woof Woof!'");
    }
    
});
app.get("/repeat/:str/:count", function(req, res){
    var str = req.params.str;
    var count = req.params.count;
    var result = "";
    for (var i = 0; i<count; i++){
        result+=str + " ";
    }  
    res.send(result);
});
app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});
