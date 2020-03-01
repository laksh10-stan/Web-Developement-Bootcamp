
//Scope tut
var y = 99;
function doMath(){
    y=100;
    console.log(y);

}


var x = 99;
function doSep(){
    var x=100;
    console.log(y);

}

//Higher Order function
// function sing(){
//     console.log("twinkle twinkle");

// }


// setInterval(sing, 1000);
clearInterval(2);

//anonymous function
setInterval(function(){
    console.log("blurb");

},2000)