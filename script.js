const hoursEl = document.querySelector("#hours")
const minutsEl = document.querySelector("#minuts")
const secondsEl = document.querySelector("#seconds")
const milisecondsEl = document.querySelector("#miliseconds")
const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")
const resumeBtn = document.querySelector("#resume")
const resetBtn = document.querySelector("#reset")


let interval;
let hours = 0;
let minuts = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pausedTime)
resumeBtn.addEventListener("click", resumeTime)
resetBtn.addEventListener("click", resetTime)

function startTimer() {

    interval = setInterval(() => {

        if (!isPaused) {

            miliseconds += 10

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }
            if (seconds === 60) {
                minuts++;
                seconds = 0;
            }
            if (minuts === 60) {
                hours++;
                minuts = 0;
            }
            hoursEl.textContent = formatTime(hours)
            minutsEl.textContent = formatTime(minuts)
            secondsEl.textContent = formatTime(seconds)
            milisecondsEl.textContent = formatTimeMili(miliseconds)
        }



    }, 10);
    startBtn.style.display = "none"
    pauseBtn.style.display = "block"
}

function pausedTime() {
    isPaused = true
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block"
}

function resumeTime() {
    isPaused = false
    pauseBtn.style.display = "block"
    resumeBtn.style.display = "none"
}

function resetTime() {
    clearInterval(interval);
    hours = 0;
    minuts = 0;
    seconds = 0;
    miliseconds = 0;

    hoursEl.textContent = "00"
    minutsEl.textContent = "00"
    secondsEl.textContent = "00"
    milisecondsEl.textContent = "000"

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
function formatTimeMili(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;

}