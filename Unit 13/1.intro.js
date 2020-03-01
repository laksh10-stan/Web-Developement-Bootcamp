//Js Objects
//Key value pairs
//no built in order
var person = {
    name : "Cindy",
    age : 32,
    city : "Missourie"
};

//Accessing
//method 1
console.log(person["name"]);

//alternative method (dot notation)
console.log(person.name)

Object.1ob  //Invalid    dot(.) doesnt support property starting with number
Object["1ob"] //Valid

Object.ob one //Invalid   dot(.) doesnt allow property name to have spaces in it
Object["ob one"]  //valid

var str = "name";
Object.str   //Doesn't look for "name"
Object[str]  //does evaluate str and looks for "name"

//Updating data
person["age"]+=1;  //updates age
person.city = "London";   //updates city

//Object initialization types
//1.
var dog={
    name: "Chewbacca",
    color: brown
}

//2.
var dog = {}
dog.name = "Chewbacca";
dog.color = "Brown";

//3.
var dog = new Object();
dog.color="brown";
dog.name="Chewbacca";

// Objects can hold Numbers, Strings, booleans, undefined, null, arrays, other objects


//Objexts vs arrays


//Array of objects
var posts = [
    {
        tit:"Cats",
        author:"pleh",
        comments: ["wow","nah"]
    },
    {
        tit:"Hakuna",
        author:"matata",
        comments:['fuck off', 'you are in']
    }
]

//posts[0].tit

//posts[1].comments[1]

















































