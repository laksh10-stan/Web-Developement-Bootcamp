var express = require("express");
var app = express();
app.listen(3000, function(){
    console.log("Server is listening to route 3000");
});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function(req, res){
    //res.render("home.html");
    res.render("home");
});
app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    //res.send("You fell in love with "+ thing);
    res.render("love", {thingVar: thing});
});
app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susan"},
        {title: "Post 2", author: "Deobrah"},
        {title: "Post 3", author: "Winnona"},
    ];
    res.render("posts", {posts: posts});
});