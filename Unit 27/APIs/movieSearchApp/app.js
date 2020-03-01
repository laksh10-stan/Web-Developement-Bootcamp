var express = require("express");
var app = express();
const request = require('request');
app.listen(3000, function(){
    console.log("Movie App has started at port 3000");
});

// app.get("/results",function(req, res){
//     request("http://www.omdbapi.com/?s=star+wars&apikey=thewdb", function(error, response, body){
//         if(!error && response.statusCode == 200){
//             var results = JSON.parse(body)
//             res.send(results.Search[0].Title);
//         }
//     });
// });
app.set("view engine", "ejs");
app.get("/results",function(req, res){
    var query =req.query.search;
    var url = "http://www.omdbapi.com/?s="+ query +"&apikey=thewdb"
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body)
            res.render("results", {data: data});
        }
    });
});

app.get("/",function(req, res){
    res.render("search");
});