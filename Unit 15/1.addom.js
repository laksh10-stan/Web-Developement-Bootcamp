var button = document.querySelector("button");
button.addEventListener("click",function(){
    console.log("Oh you hit me!");
});
var p = document.querySelector("p");
p.addEventListener("mouseover",function(){
    p.textContent="Shoo  Shoo  gon't hover over me;";
});

p.addEventListener("click",function(){
    p.style.background = "red";
})

var li = document.querySelectorAll("li");

    for (var i=0; i<li.length ; i++){
        li[i].addEventListener("click",function(){
            this.style.color="red";
            //li[i].style.color="red";   //wont work
        });
    }


//named function method used for multiple use of function   
var h2 = document.querySelector("h2");
h2.addEventListener("click",headfunct);
function headfunct(){
    h2.style.background="pink";
}

