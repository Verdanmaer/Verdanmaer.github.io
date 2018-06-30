$(document).ready(function() {
    let xOnTurn;
    let turn;
    let player;
    let computer;
    
    let numberOfTurns = 0;
    
    let field = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    
    $(".cell").click(function() {
      
        $(this).html(player);
        
        let cellId = parseInt($(this).attr("id"));
        console.log(cellId);
        numbers.splice(numbers.indexOf(cellId), 1);
        field[cellId] = player;
    
        turn = player;
    
        numberOfTurns++;
        winConditions();
    
        if ($('#result').is(':empty')){
            computersTurn();
        }
      
    });
    
    $(".choice").click(function() {
        if ($(this).html() === "X") {
            player = "X";
            computer = "O";
        } else {
            player = "O";
            computer = "X";
            computersTurn();
        }
        
        $(".cell").css("pointerEvents", "auto");
        $("#heading").fadeOut(200);    
    });
    
    $("#restart").click(restart);
   
    function computersTurn() {
        let test = numbers[Math.floor(Math.random()*numbers.length)];
        numbers.splice(numbers.indexOf(test), 1);
        $("#" + test).html(computer);
        field[test] = computer;
        
        turn = computer;
    
        $("#" + test).css("pointerEvents", "none");
        numberOfTurns++;
        winConditions();
    }
    
    function restart() { 
        field = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
        numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        numberOfTurns = 0;
        $(".cell").html("").css("background-color", "white");
        $("#heading").fadeIn(200);
        $("#result").html("");
    }
    
    function winConditions() {
        if (field[0] === turn && field[1] === turn && field[2] === turn) {
            $("#result").html("Player " + turn + " wins!");
            $("#0, #1, #2").css("background-color", "red");
            $(".cell").css("pointerEvents", "");
            $("#restart").click(restart);
        } else if (field[0] === turn && field[4] === turn && field[8] === turn) {
            $("#result").html("Player " + turn + " wins!");
            $("#0, #4, #8").css("background-color", "red");
            $(".cell").css("pointerEvents", "");
            $("#restart").click(restart);
        } else if (field[0] === turn && field[3] === turn && field[6] === turn) {
            $("#result").html("Player " + turn + " wins!");
            $("#0, #3, #6").css("background-color", "red");
            $(".cell").css("pointerEvents", "");
            $("#restart").click(restart);
        } else if (field[1] === turn && field[4] === turn && field[7] === turn) {
            $("#result").html("Player " + turn + " wins!");
            $("#1, #4, #7").css("background-color", "red");
            $(".cell").css("pointerEvents", "");
            $("#restart").click(restart);
        } else if (field[2] === turn && field[5] === turn && field[8] === turn) {
            $("#result").html("Player " + turn + " wins!");
            $("#2, #5, #8").css("background-color", "red");
            $(".cell").css("pointerEvents", "");
            $("#restart").click(restart); 
        } else if (field[2] === turn && field[4] === turn && field[6] === turn) {
            $("#result").html("Player " + turn + " wins!");
            $("#2, #4, #6").css("background-color", "red");
            $(".cell").css("pointerEvents", "");
            $("#restart").click(restart);
        } else if (field[3] === turn && field[4] === turn && field[5] === turn) {
            $("#result").html("Player " + turn + " wins!");
            $("#3, #4, #5").css("background-color", "red");
            $(".cell").css("pointerEvents", "");
            $("#restart").click(restart); 
        } else if (field[6] === turn && field[7] === turn && field[8] === turn) {
            $("#result").html("Player " + turn + " wins!");
            $("#6, #7, #8").css("background-color", "red");
            $(".cell").css("pointerEvents", "");
            $("#restart").click(restart); 
        } else if (numberOfTurns === 9) {
            $("#result").html("It's a tie!");
            $(".cell").css("pointerEvents", "");
            $("#restart").click(restart);
        }
    }
});