var s1 = document.querySelector("#s1");
var s2 = document.querySelector("#s2");
var reset = document.querySelector("#reset");
var input = document.querySelector("input");
var ws = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var gameOver = false;
var winningScore = 5;
b1.addEventListener("click",function(){
    if (!gameOver){
        p1Score++;
        if (p1Score === winningScore){
            s1.classList.add("winner");
            gameOver = true;
        }
        s1.textContent = p1Score;
    }  
});
b2.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;
        if (p2Score === winningScore){
            s2.classList.add("winner");
            gameOver = true;
        }
        s2.textContent = p2Score;
    }  
});
function resetAgain(){
    p1Score = 0;
    p2Score = 0;
    s1.textContent = 0;
    s2.textContent = 0;
    s1.classList.remove("winner");
    s2.classList.remove("winner");
    gameOver = false;
}
reset.addEventListener("click",function(){
    resetAgain();
});
input.addEventListener("change",function(){
    winningScore = Number(this.value);
    ws.textContent = this.value;
    resetAgain();
});

























