const timer = document.querySelector("#timer");
const text = document.querySelector("#text");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const arr = ["сегодня", "завтра", "послезавтра"];
let intervalId;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

start.addEventListener("click", () => {
    intervalId = setInterval(() => {
        timer.textContent = getRandomInt(arr.length);
    }, 100);
    start.remove();
});

stop.addEventListener("click", () => {
    clearInterval(intervalId);
    text.textContent = arr[+timer.textContent];
    stop.remove();
});