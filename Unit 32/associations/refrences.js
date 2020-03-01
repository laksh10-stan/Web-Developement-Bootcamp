var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_", {useUnifiedTopology: true,  useNewUrlParser: true});
var Post = require("./models/post");
var User = require("./models/user");
User.create({
    email: "bob@gmail.com",
    name: "Bob the Builder"
});
Post.create({
    title: "How to build Clan Castle 4",
    content: "Attack and loesgfvmosdx sfkkkkkkkkkkiklv xfoiwehgnfv zfot coins"
}, function(err, post){
    User.findOne({email:"bob@gmail.com"},function(err, foundUser){
        if(err){
            console.log(err);
        }
        else{
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                }
            });
        }
    });
});