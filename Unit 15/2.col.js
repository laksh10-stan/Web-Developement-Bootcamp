var button = document.querySelector("button");
// isPurple = false;
// button.addEventListener("click",function(){
//     var body = document.querySelector("body");
//     //body.style.color="purple";
//     if (isPurple){
//         body.bgColor="white";
//        // isPurple = false;

//     }
//     else{
//         body.bgColor="purple";
//         //isPurple = true;

//     }
//     isPurple = !isPurple
    
// });

button.addEventListener("click",function(){
    document.body.classList.toggle("purple");
})