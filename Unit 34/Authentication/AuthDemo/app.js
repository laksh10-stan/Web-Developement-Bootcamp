var express               = require("express"),
    app                   = express(),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User                  = require("./models/user")
    

mongoose.connect("mongodb://localhost:27017/auth_demo_app", {useUnifiedTopology: true, useNewUrlParser: true});
app.use(require("express-session")({
    secret: "codeword",
    resave: false,
    saveUninitialized :false

}));
app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

//=========================
//ROUTES
//=========================
app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});

//AUTH ROUTES
app.get("/register", function(req, res){
    res.render("register");
});
app.post("/register", function(req, res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        else{
            passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
            });
        }
    });
});

// LOGIN ROUTES
app.get("/login", function(req, res){
    res.render("login");
});
app.post("/login", passport.authenticate("local", {           //Middleware
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){

});

//LOGOUT
app.get("/logout", function(req, res){
    req.logOut();
    res.redirect("/");
});

function isLoggedIn (req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};
app.listen(3000, function(){
    console.log("Server is listening at port 3000");
});

