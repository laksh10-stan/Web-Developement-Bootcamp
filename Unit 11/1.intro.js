function hi(){
    console.log("Kripkie");
    alert("Grt");

}
hi();

function msg(RightWinger, Striker, LeftWinger){
    console.log(RightWinger);
    console.log(Striker);
    console.log(LeftWinger);
}

 msg("Lionel Messi","Luis Suarez");       //This won't produce error and last value will be assigned as undefined

function msg(RightWinger, Striker, LeftWinger){

    return LeftWinger;
}

var lw = msg("Lionel Messi","Luis Suarez", "Antoine Griezmann");  
console.log(lw);  
function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}  
var city = "melbourne";
var capital = capitalize(city);
console.log(capital);

//Substring Checker
var St = "Yankees Rock! Mets Suck!";
if(St.indexOf("Rock")!== -1)
{
    console.log("Rock is not a substring");
}

if (typeof(("This is a string")=== "string")){
    console.log("Yups that's a string")
}

//function Expression
var capitano = function(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
}

//isEven
function isEven(num){
    if (num%2===0)
    {
        return true;
    }
    return false;
}
isEven(12);
isEven(57);

//fact recursive
function recFact(num){
    if (num===1 || num===0)
    {
        return num;
    }
    return num*recFact(num-1);
}

var f = recFact(6);
console.log(f);

//kebabToSnake
// function kebabToSnake(str){
//     str=String(str);
//     console.log(str);
//     return str.replace('-','_');

// }
// var gh = kebabToSnake("Mam-dggd-adsgf");
// console.log(gh);

//Global Replacement (Case Sensitive)
// var str = "Mr Blue has a blue house and a blue car";
// var res = str.replace(/blue/g, "red");


// Global Replacement (Case Insensitive)
// var str = "Mr Blue has a blue house and a blue car";
// var res = str.replace(/blue/gi, "red");

function kebabToSnake(str){
    str=String(str);
    console.log(str);
    return str.replace(/-/g,'_');

}
var gh = kebabToSnake("Mam-dggd-adsgf");
console.log(gh);