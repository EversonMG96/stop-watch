let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");

function stopwatch() {
    second++;

    if (seconds == 60) {
        seconds = 0; 
        
        minutes ++;

        if (minutes == 60) {
            minutes = 0;
        }

        hours++;

        if (hours == 24) {
            hours = 0;
        }
         
    }
} 