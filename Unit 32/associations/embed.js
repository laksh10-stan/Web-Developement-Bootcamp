var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useUnifiedTopology: true,  useNewUrlParser: true  });

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "dany@targaryen.fire",
//     name: "Daenerys Targaryen",


// });

// newUser.posts.push({
//     title: "How to break the wheel",
//     content: "Screw it, Just do it."

// });
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log(user);
//     }

// });

// var newPost = new Post({
//     title: "I don't want it",
//     content: "You are my Queen"
// });
// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }

// });

User.findOne({name: "Daenerys Targaryen"}, function(err, user){
    if(err){
        //console.log(err);
    }
    else{
       console.log(user);
       user.posts.push({
           title: "3 people I really hate",
           content: " Cersie Lannister, Jaime Lanniste, Euron Greyjoy"
       }) ;
       user.save(function(err, user){
            if(err){
                console.log(err);
            }
            else{
                console.log(user);
            }
       });
    }
});