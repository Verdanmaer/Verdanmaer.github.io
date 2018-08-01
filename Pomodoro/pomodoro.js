$(document).ready(function() {
  
    let workTime = 1500;
    let relaxTime = 300;
    
    let defaultWorkTime;
    let defaultRelaxTime;
    
    let workInterval;
    let relaxInterval;
    
    let timeIsRunning = false;

    let beepSound = new Audio('beep.wav');
    
    $("#workTime").html(workTime / 60);
    $("#relaxTime").html(relaxTime / 60);
    $("#time").html(workTime / 60 + " minute(s)");
    
    //clock settings
    $("#workMinus").click(function() {
        if (workTime > 60) {
            workTime -= 60;
            $("#workTime").html(workTime / 60);
        }
        $("#time").html(workTime / 60 + " minute(s)");
    });
    
    $("#workPlus").click(function() {
        workTime += 60;
        $("#workTime").html(workTime / 60);
        $("#time").html(workTime / 60 + " minute(s)");
    });
    
    $("#relaxMinus").click(function() {
        if (relaxTime > 60) {
            relaxTime -= 60;
            $("#relaxTime").html(relaxTime / 60);
        }
    });
    
    $("#relaxPlus").click(function() {
        relaxTime += 60;
        $("#relaxTime").html(relaxTime / 60);
    });
    
    //interval settings
    function setWorkTime() {
        workInterval = setInterval(work, 1000);
    }
    
    function setRelaxTime() {
        relaxInterval = setInterval(relax, 1000);
    }
    
    //function to countdown work time
    function work() {  
      
        // Math.floor(workTime / 60) converts seconds to minutes
        // workTime % 60 stands for remaining seconds after division by minutes(60 seconds)
        if (Math.floor(workTime / 60) >= 10) {
            if (workTime % 60 >= 10) {
                $("#time").html(Math.floor(workTime / 60) + ":" + workTime % 60);
                //10:10
            } else {
                $("#time").html(Math.floor(workTime / 60) + ":" + "0" + workTime % 60);
                //10:09
                }
        } else {
            if (workTime % 60 >= 10) {
                $("#time").html("0" + Math.floor(workTime / 60) + ":" + workTime % 60);
                //09:10
            } else {
                $("#time").html("0" + Math.floor(workTime / 60) + ":" + "0" + workTime % 60);
                //09:09
            }
        }
      
        workTime--;
      
        if (workTime == 0) {
            clearInterval(workInterval); 
            // reset work time to default so the next countdown starts again from same time
            workTime = defaultWorkTime;  
            beepSound.play(); 
            setRelaxTime();
            
            $("#isWorkTime").html("RELAX").css("color", "green");
        }
    }
    
    //same as work function
    function relax() {
      
        if (Math.floor(relaxTime / 60) >= 10) {
            if (relaxTime % 60 >= 10) {
                $("#time").html(Math.floor(relaxTime / 60) + ":" + relaxTime % 60);
            } else {
                $("#time").html(Math.floor(relaxTime / 60) + ":" + "0" + relaxTime % 60);
            }
        } else {
            if (relaxTime % 60 >= 10) {
                $("#time").html("0" + Math.floor(relaxTime / 60) + ":" + relaxTime % 60);
            } else {
                $("#time").html("0" + Math.floor(relaxTime / 60) + ":" + "0" + relaxTime % 60);
            }
        }
         
        relaxTime--;
      
        if (relaxTime == 0) {
            clearInterval(relaxInterval);
            relaxTime = defaultRelaxTime;
            beepSound.play();
            setWorkTime();
            
            $("#isWorkTime").html("WORK!").css("color", "red");
        }
    }
    
    //button settings to start countdown or stop if time is already running
    $("#start").click(function() {
        if (timeIsRunning === false) {
            $("#start").html("Stop");
            $(".timeSettings").hide();
            $("#isWorkTime").html("WORK!").css("color", "red");
            
            defaultWorkTime = workTime;
            defaultRelaxTime = relaxTime;
            
            setWorkTime();
            
            timeIsRunning = true;
  
        } else if (timeIsRunning === true) {
            $("#start").html("Start");
            $(".timeSettings").show();
            $("#isWorkTime").html("");
            
            clearInterval(workInterval);
            clearInterval(relaxInterval);
            
            workTime = defaultWorkTime;
            relaxTime = defaultRelaxTime;
            
            $("#time").html(workTime / 60 + " minute(s)");
            
            timeIsRunning = false;
        } 
    });
});