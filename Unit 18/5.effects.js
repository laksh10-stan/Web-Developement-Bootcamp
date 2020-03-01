// fadeOut
// fadeIn
// fadeToggle

// $("button").on("click",function(){
//     $("div").fadeToggle(1000, function(){
//         //$(this).remove();

//     });
    
// });


// slideToggle
// slideDown
// slideUp

// $("button").on("click",function(){
//     $("div").slideDown();
    
// });

// $("button").on("click",function(){
//     $("div").slideUp();
    
// });

// $("button").on("click",function(){
//     $("div").slideToggle(1000, function(){
//         console.log("1s has finished");
//     });
    
// });

$("button").on("click",function(){
    $("div").slideToggle(1000, function(){
        $(this).remove();
    });
    
});