var mo = document.querySelectorAll("li");
for(var i = 0; i<mo.length;i++)
{
    mo[i].addEventListener("mouseover",function(){
        this.classList.add("selected");
    })
    
    
    mo[i].addEventListener("mouseout",function(){
        this.classList.remove("selected");
    })

    mo[i].addEventListener("click",function(){
        this.classList.add("done");
    })

}
