var express = require("express");
var app = express();

// app.get("*", function(req, res){
//     res.send("You are a Star!!");
// });
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
});
app.get("/", function(req, res){
    res.send("Hi There");
});
app.get("/bye", function(req, res){
    res.send("Good Bye");
});
app.get("/dog", function(req, res){
    console.log("Someone requested dog");
    res.send("Woof!!! Woof!!");
});
app.get("/r/:subredditName", function(req, res){   //route parameters
    
    //console.log(req);
    var subreddit = req.params.subredditName;
    console.log(req.params);
    res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit");
});
app.get("/r/:subreddiName/comments/:id/:title", function(req, res){
    res.send("Welcome to comments");
    console.log(req.params);
});
app.get("*", function(req, res){
    res.send("You are a Star!!");
});