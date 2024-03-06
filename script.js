let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStopBtn").innerText = "Start";
    } else {
        timer = setInterval(updateStopwatch, 1000);
        document.getElementById("startStopBtn").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function resetStopwatch() {
    clearInterval(timer);
    document.getElementById("startStopBtn").innerText = "Start";
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.getElementById("stopwatch").innerText = formattedTime;
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}

document.getElementById("startStopBtn").addEventListener("click", startStop);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);
