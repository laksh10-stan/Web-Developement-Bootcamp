var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
var Cat = mongoose.model("Cat", catSchema);


// var tom = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

//  tom.save(function(err, cat){
//      if(err){
//          console.log("Something went wrong!");
//      }
//      else{
//          console.log("Saved a Cat in Database");
//          console.log(cat);
//      }
//  });

Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh no Error");
        console.log(error);
    }
    else{
        console.log("All the Cats");
        console.log(cats)
    }

});

Cat.create({
    name: "Kitty",
    age: 6,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    }
    else{
        console.log(cat);
    }
});