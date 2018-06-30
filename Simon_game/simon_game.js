$( document ).ready(function() {
  
    let simonsChoice = 0;
    let level = 2;
    let turn = 0;
    let counter = -1;
    
    let result = [];
    let playersChoice = [];
    
    let secondTry = false;
    let strictMode = false;
    
    let audioUrl = ("https://s3.amazonaws.com/freecodecamp/");
    let audioEnding = ["simonSound1.mp3", "simonSound2.mp3", "simonSound3.mp3", "simonSound4.mp3"];
    
    function highlight() {
        $(".field").css("pointerEvents", "none");
        simonsChoice = Math.floor(Math.random() * Math.floor(4));
            
        if (turn + 1 === level && secondTry === false) {
            result.push(simonsChoice);
        }
        
        let sound = new Audio(audioUrl + audioEnding[result[turn]]);
        sound.play();
        
        $("#field" + result[turn]).css("opacity", "0.5");
        turn++;
            
        setTimeout(function() {
            $(".field").css("opacity", "1");
            
            if(turn === level) {
                $(".field").css("pointerEvents", "auto");
                $("#restart").css("pointerEvents", "auto");
            }
            setTimeout(repeat, 300);
        }, 800);
    }
    
    function repeat() {
      if (turn < level) {
        highlight();
      }  
    }
    
    function playersTurn() {
        let field = $(this).attr("id");
        field = parseInt(field.slice(-1));
        playersChoice.push(field);
        counter++;
        
        let sound = new Audio(audioUrl + audioEnding[field]);
        sound.play();
        
        if(playersChoice[counter] != result[counter]) {
            if(strictMode === false) {
                counter = -1;
                turn = 0;
                playersChoice = [];
                secondTry = true;
                $("#info").html("You made a mistake, try again!");
                $("#restart").css("pointerEvents", "none");
                setTimeout(repeat, 600);
            } else {
                counter = -1;
                turn = 0;
                playersChoice = [];
                secondTry = false;
                result = [];
                level = 2;
                $("#play").css("pointerEvents", "auto");
                $("#strictMode").css("pointerEvents", "auto");
                $(".field").css("pointerEvents", "none");
                $("#info").html("You failed, click play to start again");
            }    
            return false;
        }
        
        if (counter === level-1 && playersChoice[counter] === result[counter]) {
            counter = -1;
            turn = 0;
            playersChoice = [];
            secondTry = false;
            
            if (level === 20) {
                level = 2;
                result = [];
                
                $("#info").html("Victory!");
                $("#level").html("Level: " + level);
                $("#play").css("pointerEvents", "auto");
                $("#strictMode").css("pointerEvents", "auto");
                $(".field").css("pointerEvents", "none");
                return false;    
            }
            
            level++;  
            $("#level").html("Level: " + level);
            $("#info").html("Level up!");
            $("#restart").css("pointerEvents", "none");
            
            setTimeout(repeat, 600); 
        }
    }
    
    $(".field").click(playersTurn);
    
    $("#play").click(function() {
        simonsChoice = Math.floor(Math.random() * Math.floor(4));
        result.push(simonsChoice);
        turn = 0;
        repeat();
        $("#play").css("pointerEvents", "none");
        $("#level").html("Level: " + level);
        $("#strictMode").css("pointerEvents", "none");
        $("#restart").css("pointerEvents", "none");
    });
    
    $("#strictMode").click(function(){
        if (strictMode === false) {
            $("#strictMode").html("Strict mode: ON").css({"background": "rgba(255, 0, 0, 0.8)","color": "rgba(0, 200, 0, 1)"});
            strictMode = true;
        } else {
            $("#strictMode").html("Strict mode: OFF").css({"background": "rgba(0, 255, 0, 0.7)","color": "rgba(255, 0, 0, 1)"});
            strictMode = false;
        }
    });
    
    $("#restart").click(function() {
        counter = -1;
        turn = 0;
        playersChoice = [];
        secondTry = false;
        result = [];
        level = 2;
        $("#play").css("pointerEvents", "auto");
        $("#strictMode").css("pointerEvents", "auto");
        $(".field").css("pointerEvents", "none");
        $("#info").html("Good luck!");
    });
  });