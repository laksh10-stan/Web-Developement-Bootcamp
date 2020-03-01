//1. change element Style
//2. add/remove classes
//3. changing the content of a tag
//4. chanding attributes (src, href etc)

var tag = document.getElementById("highlight");

//Manipulate
// Method 1 (not very DRY)

// tag.style.color = "blue";
// tag.style.border = "2px solid red";
// tag.style.background = "pink";
// tag.style.marginBottom = "20px";


// border
// fontsize
// background
// marginTop
// the right side must always be a string 70ps is written as "70px";

// and hundreds of others

//Alternate Method (DRY)

//CSS class code

// .classname{
//     color : "blue";
//     border = 2px solid red;
//     background = "pink";
//     marginBottom = 20px;
// }

//Js code
// var tag = document.getElementById("highlight");
// tag.classList.add("classname");  //add a class


// tag.classList.remove("classname");   //remove class
// tag.classList.toggle("classname");   //toggles

//3. Changing the content of an element

//HTML
//<p>
//    this is an <strong>AWESOME</strong> paragraph.
//</p>


//Js

//var tag = document.querySelector("p");

//tag.textContent = "Blah blas";  //alter the text
//this is dangerous as it will overwrite the strong tags and every other tag inside p

tag.innerHTML //It generates and preserves all underlying tags inside p


//selection without temporary variable
document.querySelector("h1").textContent = "END";


//Miscellaneous difference between texContent and innerHTML
document.body.textContent = "<h1>Heading 1</h1>";  //this will treat HTML as text


document.body.innerHTML = "<h1>Heading 1</h1>";    //this will treat HTML as HTML



//4. Changing the atributes 

//getAttribute()
//setAttribute()

//Demo HTML

//<a href="https://www.google.com/">Google</a>
//<img src = "logo.png">

//Demo js

var link = document.querySelector("a");
link.getAttribute("href");


link.setAttribute("href", "https://www.duckduckgo.com/");


var img = document.querySelector("img");
img.setAttribute("src","cogi.png");












































































































































