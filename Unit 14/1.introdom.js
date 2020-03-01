//Documenmt Object Model DOM

//Console commands
//document
//console.dir(Object)

var h1 = document.querySelector("h1");
h1.style.color="pink";

var para = document.querySelector("p");
var isBlue = false;
setInterval (function(){
    if (isBlue){
        para.style.background = "white";
    }else{
        para.style.background = "#3498db";
    }
    isBlue = !isBlue;
}, 1000);





//Examples
//document.URL
//document.links
//document.body
//document.head

// Selector methods (Important Ones)
// 1.document.getElementById()
// 2.document.getElementsByClassName()
// 3.document.getElementsByTagName()
// 4.document.querySelector()
// 5.document.querySelectorAll()