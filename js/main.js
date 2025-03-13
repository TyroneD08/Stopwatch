    const startButton = document.getElementById("js--start");
    const stopButton = document.getElementById("js--stop");
    let seconds = 0;
    let minutes = 0;
    let running = false;

    const secondsTimer = document.getElementById("js--secondsTimer");
    const minutesTimer = document.getElementById("js--minutesTimer");

    let timer;

    startButton.onclick = function(){
        if(running === true){/*als stopwatch al loops dan mag je niks doen*/
            return;
        }
        running = true;
        timer = setInterval(function(){
            seconds = seconds + 1;
            if(seconds === 60){
                minutes = minutes + 1;
                minutesTimer.innerText = minutes;
                seconds = 0;
            }
            secondsTimer.innerText = seconds;
        }, 1000);
    }

    stopButton.onclick = function(){
        clearInterval(timer);
        running = false;
    }


    /* hier begint slider */
    const rangeValue = document.getElementById("js--rangeValue");

    const slider = document.getElementById("js--slider");