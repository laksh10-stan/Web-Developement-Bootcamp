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


//1
// var hig = document.getElementById("hig");
// hig.style.color= "red";
//console.dir(hig)

//2
// var b = document.getElementsByClassName("bold");
// console.dir(b)
// b[0]
// b.length

// b.forEach()      *******WE CANT DO THIS*******

//console.dir(b[0])


//3
// var t = document.getElementsByTagName("ul");
// console.log(t);
// console.dir(t);

//Works fine with html, body, title tags as well
//var body = document.getElementsByTagName("body")[0];


//4
//Takes a css style selector

// var hig = document.querySelector("#hig");
// var t = document.querySelector("ul");

//It only gives us the first match
// var bold = document.querySelector(".bold");


//5
//for all elements having "bold" class
//var bold = document.querySelectorAll(".bold");

// document.querySelectorAll()  still works on a single match





//Nested
//var li = document.querySelector("li a.special");





















