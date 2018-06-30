$(document).ready(function(){

    var number = [];
    var display = [];
    var dot = false;
    
    $(".calculate").click(function(){
        if (display.length > 8) {
            console.log("Too many digits");
        } else {
            var selectedDigit = $(this).text();
            number.push(selectedDigit);
            display.push(selectedDigit);
            $("#input").html(display);
    
            if (dot === true) {
                $("#dot").css("pointer-events", "none");
            } else if (dot === false) {    
                $("#dot").css("pointer-events", "");
            }
        }
    });
    
    $("#dot").click(function() {dot = true;});
    
    $("#equal").click(function() {
        number = number.join("");
        number = eval(number);
        number = Math.round(number * 1000)/1000;
        
        if (number.toString().length > 9) {
            $("#input").html("Too large");
        } else {
            $("#input").html(number);
        }    
        number = number.toString().split(""); 
        dot = false;
    });
    
    $(".operators").click(function() {
        display = [];
        var operator = $(this).text();
        $("#input").html(operator);
        dot = false;
    });
    
    $("#deleteAll").click(function() {
        number = [];
        display = [];
        $("#input").html(display);
        dot = false;
    });
    
    $("#deleteOne").click(function() {
        number.pop();
        display.pop();
        $("#input").html(display);
        dot = false;  
    });
});