//Spaghetti code --> No Modular features at all
var colors = generateRandomColors(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton  = document.querySelector("#reset");
var colorDisplay = document.getElementById("colorDisplay");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;
easyBtn.addEventListener("click", function(){
    numSquares = 3;
    h1.style.backgroundColor = "steelblue";
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i = 0; i<squares.length; i++){
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
})
hardBtn.addEventListener("click", function(){
    numSquares = 6;
    h1.style.backgroundColor = "steelblue";
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for( var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"; 
    } 
})
resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    this.textContent = "New Colors";
})
for (var i= 0; i<squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            message.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    }); 
}
colorDisplay.textContent = pickedColor;
function changeColors(color){
    for (var i= 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() *colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for (var i=0; i<num; i++){
        arr.push(randomColor()) ;
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}








