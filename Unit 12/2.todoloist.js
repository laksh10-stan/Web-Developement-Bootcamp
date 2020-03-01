window.setTimeout(function() {
  // put all of your JS code from the lecture here
  var todos = [];
  var input = prompt("What would you like to do");
  while(input!=="quit"){
    if (input==="list"){
        console.log("*************");
        todos.forEach(function(f,i){
            console.log(i+" : "+f);
        });
        console.log("*************");
    }
    else if(input==="delete"){
        var idx = prompt("Enter the index of deletion");
        todos.splice(idx,1);
        console.log("Element at "+idx+"is deleted");


    }
    else if(input==="new"){
        var newTodo = prompt("Add a new  todo");
        todos.push(newTodo);
    }
    var input = prompt("What would you like to do");
}
console.log("You've Quit");
}, 500);
 