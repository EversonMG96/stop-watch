let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    second++;

    if (seconds == 60) {
        seconds = 0; 
        
        minutes ++;

        if (minutes == 60) {
            minutes = 0;
        }

        hours++;
        
    }
} 

function watchStart() {
    setInterval ((stopwatch, 1000));
}